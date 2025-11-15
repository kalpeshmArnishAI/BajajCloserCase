# import camelot
# import json
# import sys
# import io

# # Ensure stdout can handle UTF-8
# sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# PDF_FILE = "inputExample2.pdf"
# OUT_FILE = "output.json"

# try:
#     tables = camelot.read_pdf(PDF_FILE, pages='all', flavor='lattice')

#     print("total tables:", tables.n)

#     final_dict = {}
#     current_key = None

#     for t in range(tables.n):
#         df = tables[t].df

#         for _, row in df.iterrows():

#             # ---------------- FIXED: do not break single character words --------------
#             row = [str(x).replace("\n","") for x in row]   # remove newline fully
#             row = [" ".join(x.strip().split()) for x in row]  # collapse extra spaces
#             # --------------------------------------------------------------------------

#             key = row[0]
#             rest = row[1:]

#             val = " ".join([x for x in rest if x])

#             non_empty_count = sum(1 for x in row if x)

#             if key:   # new key present
#                 current_key = key

#                 if current_key in final_dict:
#                     i = 2
#                     new_key = f"{current_key}_{i}"
#                     while new_key in final_dict:
#                         i += 1
#                         new_key = f"{current_key}_{i}"
#                     current_key = new_key

#                 final_dict[current_key] = val

#             else:
#                 # only allow continuation if only 1 cell non empty (pure continuation)
#                 if current_key and non_empty_count==1 and val:
#                     final_dict[current_key] += " " + val
#                     final_dict[current_key] = " ".join(final_dict[current_key].split())
#                 else:
#                     # treat as a new key found in second column
#                     if val:
#                         current_key = val
#                         if current_key in final_dict:
#                             i = 2
#                             new_key = f"{current_key}_{i}"
#                             while new_key in final_dict:
#                                 i += 1
#                                 new_key = f"{current_key}_{i}"
#                             current_key = new_key
#                         final_dict[current_key] = ""

#     print(json.dumps(final_dict, indent=2, ensure_ascii=False))

#     with open(OUT_FILE, 'w', encoding='utf-8') as f:
#         json.dump(final_dict, f, ensure_ascii=False, indent=2)

#     print("Python script execution completed. JSON saved.")

# except Exception as e:
#     print("ERROR:", e)

import camelot
import json
import sys
import io
import os

# Ensure stdout can handle UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Get PDF and output paths from command-line arguments
PDF_FILE = sys.argv[1] if len(sys.argv) > 1 else "inputExample3.pdf"
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

            if key:   # new key present
                current_key = key

                if current_key in final_dict:
                    i = 2
                    new_key = f"{current_key}_{i}"
                    while new_key in final_dict:
                        i += 1
                        new_key = f"{current_key}_{i}"
                    current_key = new_key

                final_dict[current_key] = val

            else:
                # only allow continuation if only 1 cell non empty (pure continuation)
                if current_key and non_empty_count==1 and val:
                    final_dict[current_key] += " " + val
                    final_dict[current_key] = " ".join(final_dict[current_key].split())
                else:
                    # treat as a new key found in second column
                    if val:
                        current_key = val
                        if current_key in final_dict:
                            i = 2
                            new_key = f"{current_key}_{i}"
                            while new_key in final_dict:
                                i += 1
                                new_key = f"{current_key}_{i}"
                            current_key = new_key
                        final_dict[current_key] = ""

    # Save JSON
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_dict, f, ensure_ascii=False, indent=2)

    # Clear, single confirmation message
    print("PDF to JSON converted successfully ✅")

except Exception as e:
    print("ERROR:", e)
    sys.exit(1)
