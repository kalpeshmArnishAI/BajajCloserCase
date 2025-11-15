import camelot
import json
import sys
import io
import os

# Ensure stdout can handle UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Get PDF and output paths from command-line arguments
PDF_FILE = sys.argv[1] if len(sys.argv) > 1 else "input5.pdf"
OUT_FILE = sys.argv[2] if len(sys.argv) > 2 else "output.json"

try:
    tables = camelot.read_pdf(PDF_FILE, pages='all', flavor='lattice')

    # Optional: print number of tables
    print(f"Total tables found: {tables.n}")

    final_dict = {}
    current_key = None

    for t in range(tables.n):
        df = tables[t].df

        for _, row in df.iterrows():
            # ---------------- FIXED: do not break single character words --------------
            row = [str(x).replace("\n","") for x in row]   # remove newline fully
            row = [" ".join(x.strip().split()) for x in row]  # collapse extra spaces
            # --------------------------------------------------------------------------

            key = row[0]
            rest = row[1:]

            val = " ".join([x for x in rest if x])

            non_empty_count = sum(1 for x in row if x)

            if key:   # new key present in first column
                # Check if key might have a value concatenated to it (e.g., "Name of Family Physician NA")
                # Only split if no value exists in the row and we're CERTAIN it's a value
                key_parts = key.split()
                potential_key = key
                potential_val = val
                
                # Common key words that should NEVER be split from keys
                # These are legitimate parts of keys, not values
                key_words = ["remarks", "findings", "copy", "background", "patient", "by", "etc.", 
                            "etc", "details", "name", "address", "number", "no", "date", "time",
                            "check", "visit", "verification", "screenshot", "attached", "attach"]
                
                # If no value in row and key has multiple words, check if last word(s) might be a value
                # Handle both 2-word keys (like "Qualification NA") and longer keys
                if not val and len(key_parts) >= 2:
                    last_word = key_parts[-1]
                    last_two = " ".join(key_parts[-2:]) if len(key_parts) >= 4 else ""
                    
                    # ONLY split for very specific value patterns - be very conservative
                    # 1. Known short value patterns
                    short_values = ["NA", "N/A", "YES", "NO", "Yes", "No", "n/a", "na" ]
                    
                    # 2. Very short uppercase words (1-3 chars) that are likely values
                    is_short_upper_value = (len(last_word) <= 3 and last_word.isupper() and 
                                           last_word not in ["NO", "YES", "N/A", "NA"])  # Already handled above
                    
                    # 3. "In House" pattern (specific known value phrase)
                    is_in_house = last_two and last_two.lower().replace("-", " ") == "in house"
                    
                    # Check if last word is a known value (and NOT a key word)
                    # For 2-word keys, be more careful - only split if it's a clear value
                    if last_word in short_values:
                        # Always split known values like "NA", "YES", "NO"
                        potential_key = " ".join(key_parts[:-1])
                        potential_val = last_word
                    # Check for "In House" pattern (requires at least 4 words total)
                    elif is_in_house and len(key_parts) >= 4:
                        potential_key = " ".join(key_parts[:-2])
                        potential_val = last_two
                    # For 2-word keys, don't split unless it's a known value (already handled above)
                    # For longer keys, check for very short uppercase values (but not if it's a key word)
                    elif len(key_parts) >= 3 and is_short_upper_value and last_word.lower() not in [w.lower() for w in key_words]:
                        potential_key = " ".join(key_parts[:-1])
                        potential_val = last_word
                    # DO NOT split for lowercase words - they're likely part of the key
                    # (like "remarks", "findings", "copy", etc.)
                
                # This is a proper key - set it as current_key
                current_key = potential_key

                if current_key in final_dict:
                    i = 2
                    new_key = f"{current_key}_{i}"
                    while new_key in final_dict:
                        i += 1
                        new_key = f"{current_key}_{i}"
                    current_key = new_key

                # Set the value for this key (use extracted value if available)
                final_dict[current_key] = potential_val

            else:
                # First column is empty - this is a continuation row
                # NEVER create new keys from values in second column
                # Always append to current_key's value if we have one
                if current_key:
                    # We have a current key - append value to it (if value exists)
                    if val:
                        if final_dict.get(current_key, ""):
                            final_dict[current_key] += " " + val
                        else:
                            final_dict[current_key] = val
                        final_dict[current_key] = " ".join(final_dict[current_key].split())
                    # If val is empty, do nothing - keep current_key for next row
                # If no current_key exists and first column is empty, skip this row
                # Don't create keys from values in second column

    # Save JSON
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_dict, f, ensure_ascii=False, indent=2)

    # Clear, single confirmation message
    print("PDF to JSON converted successfully ✅")

except Exception as e:
    print("ERROR:", e)
    sys.exit(1)
