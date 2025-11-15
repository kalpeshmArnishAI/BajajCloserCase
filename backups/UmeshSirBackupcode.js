const { spawn } = require('child_process');
const fs = require('fs');
const { I } = inject();
const { LOCATORS } = require("./locators");
// const fieldMap = require('./formMapping');
const formMapping = require('./formMapping');
const moment = require('moment');


// Helper function to run Python script
function runPythonScript(scriptPath, args = []) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', [scriptPath, ...args]);
    let data = '';
    let error = '';

    pythonProcess.stdout.on('data', (stdout) => {
      data += stdout.toString();
    });

    pythonProcess.stderr.on('data', (stderr) => {
      error += stderr.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(`Python exited with code ${code}, error: ${error}`));
      }
      resolve(data.trim());
    });

    pythonProcess.on('error', (err) => reject(err));
  });
}

// Helper function to wait for file
function waitForFile(filePath, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const interval = setInterval(() => {
      if (fs.existsSync(filePath)) {
        clearInterval(interval);
        resolve(true);
      } else if (Date.now() - start > timeout) {
        clearInterval(interval);
        reject(new Error(`File not created within ${timeout}ms: ${filePath}`));
      }
    }, 100);
  });
}
// --------------------- vdatetime picker helper (robust date/time parsing) ---------------------
async function pickVDatetime(I, dobInputLocator, targetDateString) {
  // parse date (dd/mm/yyyy | yyyy-mm-dd | ddmmyyyy) with optional time tail
  function parseDateStrict(str) {
    str = (str || '').toString().trim();
    if (!str) throw new Error(`❌ pickVDatetime: empty date string`);

    // split off trailing time portion (keep the remainder as dateCandidate)
    // We look for first occurrence of space + time-like token OR a pure date with appended time digits
    // Examples we want to support:
    // "14/10/2025 11:25 AM", "14-10-2025 1125AM", "14102025 1125 AM", "2025-10-14 11:25"
    // Strategy: try several date regexes (with optional trailing space+time capture)
    let m;

    // 1) dd/mm/yyyy or dd-mm-yyyy optionally followed by space+time
    m = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:\s+(.+))?$/);
    if (m) return { day: +m[1], month: +m[2], year: +m[3], time: (m[4] || null) };

    // 2) yyyy/mm/dd or yyyy-mm-dd optionally followed by space+time
    m = str.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})(?:\s+(.+))?$/);
    if (m) return { year: +m[1], month: +m[2], day: +m[3], time: (m[4] || null) };

    // 3) ddmmyyyy optionally followed by space+time OR with no space but time digits after a space separated part
    // handle "14102025 1125 AM" or "141020251125AM" etc.
    m = str.match(/^(\d{2})(\d{2})(\d{4})(?:\s+(.+))?$/);
    if (m) return { day: +m[1], month: +m[2], year: +m[3], time: (m[4] || null) };

    // 4) If date and time are jammed together without space (e.g. "141020251125AM"), try to split 8 + rest
    m = str.match(/^(\d{8})(.+)$/);
    if (m) {
      const datePart = m[1];
      const rest = (m[2] || '').trim();
      const d = datePart.substring(0, 2);
      const mo = datePart.substring(2, 4);
      const y = datePart.substring(4, 8);
      return { day: +d, month: +mo, year: +y, time: rest || null };
    }

    // 5) fallback: try to extract any 8-digit sequence as date and rest as time
    m = str.match(/(\d{8})/);
    if (m) {
      const datePart = m[1];
      const idx = str.indexOf(datePart) + datePart.length;
      const rest = str.substring(idx).trim();
      const d = datePart.substring(0, 2);
      const mo = datePart.substring(2, 4);
      const y = datePart.substring(4, 8);
      return { day: +d, month: +mo, year: +y, time: rest || null };
    }

    throw new Error(`❌ pickVDatetime: Unsupported date format "${str}"`);
  }

  // parse time tolerant: accepts "HH:MM AM", "HHMM AM", "HH:MMAM", "HHMMAM", "HH:MM", "HHMM"
  function parseTimePart(tstr) {
    if (!tstr) return null;
    tstr = tstr.toString().trim();

    // Remove any commas
    tstr = tstr.replace(/,/g, '');

    // Try patterns with explicit AM/PM first
    let m = tstr.match(/^(\d{1,2}):?(\d{2})\s*([AaPp][Mm])$/);
    if (m) return { hour: m[1].replace(/^0+/, ''), minute: m[2].replace(/^0+/, ''), period: m[3].toUpperCase() };

    m = tstr.match(/^(\d{1,2}):?(\d{2})([AaPp][Mm])$/); // e.g. 1125AM or 11:25AM
    if (m) return { hour: m[1].replace(/^0+/, ''), minute: m[2].replace(/^0+/, ''), period: m[3].toUpperCase() };

    // Try patterns without AM/PM (we will still click hour/minute; period may be absent)
    m = tstr.match(/^(\d{1,2}):?(\d{2})$/);
    if (m) return { hour: m[1].replace(/^0+/, ''), minute: m[2].replace(/^0+/, ''), period: null };

    // If tstr is like "1125" or "0830AM" handled above mostly, but try fallback for 3-4 digit numeric string
    m = tstr.match(/^(\d{3,4})([AaPp][Mm])?$/);
    if (m) {
      const digits = m[1];
      const hr = digits.length === 3 ? digits.substring(0,1) : digits.substring(0,2);
      const min = digits.length === 3 ? digits.substring(1) : digits.substring(2);
      const per = m[2] ? m[2].toUpperCase() : null;
      return { hour: hr.replace(/^0+/, ''), minute: min.replace(/^0+/, ''), period: per };
    }

    // nothing matched
    return null;
  }

  const target = parseDateStrict(targetDateString);
  const timeObj = parseTimePart(target.time);

  I.say(`🎯 pickVDatetime: Selecting ${target.day}-${target.month}-${target.year}` + (timeObj ? ` at ${timeObj.hour}:${timeObj.minute} ${timeObj.period || ''}` : ''));

  // open datepicker
  await I.click(dobInputLocator);
  await I.waitForVisible('//*[@class="vdatetime-popup__header"]', 5);

  // selectors
  const yearHeader = '//*[@class="vdatetime-popup__header"]//div[1]';
  const monthHeader = '//*[@class="vdatetime-popup__header"]//div[2]';
  const yearPickerContainerXpath = '//*[@class="vdatetime-popup"]//div[contains(@class,"vdatetime-year-picker")]';
  const monthPickerContainerXpath = '//*[@class="vdatetime-popup"]//div[contains(@class,"vdatetime-month-picker")]';
  const daySelector = day => `//div[contains(@class,"vdatetime-calendar__month__day") and not(contains(@class,"--disabled"))]//span[normalize-space(text())="${day}"]`;
  const continueBtn = '//div[contains(@class,"vdatetime-popup__actions__button--confirm")]';

  // ---------- Year selection by scrolling ----------
  await I.click(yearHeader);
  await I.wait(0.3);

  const scrollYearResult = await I.executeScript((containerXPath, yearText) => {
    try {
      const getByXPath = (xp, root = document) => {
        return document.evaluate(xp, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      };
      const container = getByXPath(containerXPath);
      if (!container) return { ok: false, msg: 'year container not found' };

      const candidates = Array.from(container.querySelectorAll('span, div, button, a'));
      const match = candidates.find(el => el.textContent && el.textContent.trim() === String(yearText));
      if (match) {
        match.scrollIntoView({ block: 'center' });
        return { ok: true, msg: 'scrolled to exact match' };
      }

      const partial = candidates.find(el => el.textContent && el.textContent.trim().includes(String(yearText)));
      if (partial) {
        partial.scrollIntoView({ block: 'center' });
        return { ok: true, msg: 'scrolled to partial match' };
      }

      const step = Math.max(100, Math.floor(container.clientHeight * 0.8));
      for (let pos = 0; pos <= container.scrollHeight; pos += step) {
        container.scrollTop = pos;
        const nowCandidates = Array.from(container.querySelectorAll('span, div, button, a'));
        const found = nowCandidates.find(el => el.textContent && el.textContent.trim() === String(yearText));
        if (found) {
          found.scrollIntoView({ block: 'center' });
          return { ok: true, msg: 'found during stepped scroll' };
        }
      }
      return { ok: false, msg: 'year not found after scrolling' };
    } catch (err) {
      return { ok: false, msg: 'script error: ' + err.message };
    }
  }, yearPickerContainerXpath, target.year);

  I.say(`pickVDatetime: scrollYearResult -> ${JSON.stringify(scrollYearResult)}`);

  const yearSelector = `//div[contains(@class,"vdatetime-year-picker")]//*[normalize-space(text())="${target.year}"]`;
  await I.waitForElement(yearSelector, 5);
  await I.scrollTo(yearSelector);
  await I.click(yearSelector);
  I.say(`✅ Year selected: ${target.year}`);
  await I.wait(0.2);

  // ---------- Month selection ----------
  await I.click(monthHeader);
  await I.wait(0.2);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[target.month - 1];
  const monthSelector = `//div[contains(@class,"vdatetime-month-picker")]//*[normalize-space(text())="${monthName}"]`;

  await I.waitForElement(monthSelector, 5);
  await I.scrollTo(monthSelector);
  await I.click(monthSelector);
  I.say(`✅ Month selected: ${monthName}`);
  await I.wait(0.2);

  // ---------- Day selection ----------
  const finalDaySel = daySelector(target.day);
  await I.waitForElement(finalDaySel, 5);
  await I.click(finalDaySel);
  I.say(`✅ Day selected: ${target.day}`);
  await I.wait(0.2);

  // ---------- If time present, select time ----------
  if (timeObj) {
    I.say(`⏱ Time detected: ${timeObj.hour}:${timeObj.minute} ${timeObj.period || ''} — selecting time...`);

    // time picker base (as provided)
    const timeBase = '//*[@class="vdatetime-time-picker vdatetime-time-picker__with-suffix"]';

    // hour & minute xpaths: try exact and zero-padded matches
    const hourCandidates = [
      `${timeBase}//div[1]//div[normalize-space(.)="${timeObj.hour}"]`,
      `${timeBase}//div[1]//div[normalize-space(.)="${timeObj.hour.padStart(2, '0')}"]`
    ];
    const minuteCandidates = [
      `${timeBase}//div[2]//div[normalize-space(.)="${timeObj.minute}"]`,
      `${timeBase}//div[2]//div[normalize-space(.)="${timeObj.minute.padStart(2, '0')}"]`
    ];

    // wait for time picker to be visible
    await I.waitForElement(timeBase, 3);

    // try hours
    let hourClicked = false;
    for (const xp of hourCandidates) {
      try {
        await I.waitForElement(xp, 1);
        await I.scrollTo(xp);
        await I.click(xp);
        hourClicked = true;
        I.say(`✅ Hour clicked via ${xp}`);
        break;
      } catch (e) {
        // continue trying other candidate
      }
    }
    if (!hourClicked) I.say('⚠️ Hour element not found — continuing anyway.');

    await I.wait(0.2);

    // try minutes
    let minuteClicked = false;
    for (const xp of minuteCandidates) {
      try {
        await I.waitForElement(xp, 1);
        await I.scrollTo(xp);
        await I.click(xp);
        minuteClicked = true;
        I.say(`✅ Minute clicked via ${xp}`);
        break;
      } catch (e) {
        // continue trying other candidate
      }
    }
    if (!minuteClicked) I.say('⚠️ Minute element not found — continuing anyway.');

    await I.wait(0.2);

    // AM / PM selection:
    const amXPath = `${timeBase}//div[3]//div[1]`;
    const pmXPath = `${timeBase}//div[3]//div[2]`;

    if (timeObj.period) {
      const period = timeObj.period.toUpperCase();
      try {
        if (period === 'AM') {
          await I.waitForElement(amXPath, 1);
          await I.scrollTo(amXPath);
          await I.click(amXPath);
          I.say('✅ Selected AM');
        } else {
          await I.waitForElement(pmXPath, 1);
          await I.scrollTo(pmXPath);
          await I.click(pmXPath);
          I.say('✅ Selected PM');
        }
      } catch (e) {
        I.say(`⚠️ Could not explicitly select ${period} — continuing.`);
      }
    } else {
      I.say('ℹ️ No AM/PM found in time string — skipping AM/PM selection.');
    }
  } // end if timeObj
  // ---------- Confirm ----------
  await I.waitForElement(continueBtn, 5);
  await I.click(continueBtn);
  I.say('✅ Date (and time if present) confirmed.');
  await I.wait(0.25);
}

function normalizeDateString(raw) {
  if (!raw) return null;

  let s = String(raw).trim();

  // Replace multiple spaces with single
  s = s.replace(/\s+/g, ' ');

  // Ensure space before AM/PM (e.g., "9AM" → "9 AM")
  s = s.replace(/(AM|PM)$/i, ' $1');

  // Replace slashes or dots with hyphens
  s = s.replace(/[/\.]/g, '-');

  // If time is only "9 AM" (no minutes), add :00
  if (/ \d{1,2} (AM|PM)$/i.test(s)) {
    s = s.replace(/ (\d{1,2}) (AM|PM)$/i, ' $1:00 $2');
  }

  // If time is like "9:5 AM", convert "9:5" → "9:05"
  s = s.replace(/:(\d)(?!\d)/g, ':0$1');

  return s;
}

function parseNormalizedDate(raw) {
  const clean = normalizeDateString(raw);
  return moment(clean, ["DD-MM-YYYY hh:mm A","DD-MM-YYYY h:mm A"]);
}

function extractDateParts(momentObj) {
  if (!momentObj || !momentObj.isValid()) return null;

  return {
    day: momentObj.format("DD"),        // 02
    month: momentObj.format("MM"),      // 11
    year: momentObj.format("YYYY"),     // 2025
    hour_24: momentObj.format("HH"),    // 09
    hour_12: momentObj.format("hh"),    // 09
    minute: momentObj.format("mm"),     // 00
    ampm: momentObj.format("A"),        // AM
    date: momentObj.format("DD-MM-YYYY"),          // 02-11-2025
    time_12h: momentObj.format("hh:mm A"),         // 09:00 AM
    time_24h: momentObj.format("HH:mm"),           // 09:00
    full_human: momentObj.format("DD MMM YYYY, hh:mm A") // 02 Nov 2025, 09:00 AM
  };
}


async function fillDateValueWithExtractedDateObj(extractedDateObj){
  // Select Year
  const yearHeader = '//*[@class="vdatetime-popup__header"]//div[1]';
  I.click(yearHeader);
  const yearSelector = `//div[contains(@class,'vdatetime-year-picker')]//*[normalize-space(text())='${extractedDateObj.year}']`;
  await I.waitForElement(yearSelector, 5);
  await I.scrollTo(yearSelector);
  await I.click(yearSelector);
  I.wait(0.5);
  // select month
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthHeader = '//*[@class="vdatetime-popup__header"]//div[2]';
  await I.click(monthHeader);
  await I.wait(0.2);

  
  const monthName = monthNames[extractedDateObj.month];
  const monthSelector = `//div[contains(@class,"vdatetime-month-picker")]//*[normalize-space(text())="${monthName}"]`;

  await I.waitForElement(monthSelector, 5);
  await I.scrollTo(monthSelector);
  await I.click(monthSelector);
  I.wait(0.2);

  // select day
  const daySelector = `//div[contains(@class,"vdatetime-calendar__month__day") and not(contains(@class,"--disabled"))]//span[normalize-space(text())="${parseInt(extractedDateObj.day)}"]`;
  I.click(daySelector);
  I.wait(0.2);

  // select time
  const timeBase = '//*[@class="vdatetime-time-picker vdatetime-time-picker__with-suffix"]';
  await I.waitForElement(timeBase, 3);
  const hoursToBeSelcted = `${timeBase}//div[1]//div[normalize-space(.)="${parseInt(extractedDateObj.hour_12)}"]`;
  I.click(hoursToBeSelcted);
  I.wait(0.2);
  const minutesToBeSelected = `${timeBase}//div[2]//div[normalize-space(.)="${extractedDateObj.minute}"]`;
  I.click(minutesToBeSelected);
  I.wait(0.2);

  const amXPath = `${timeBase}//div[3]//div[1]`;
  const pmXPath = `${timeBase}//div[3]//div[2]`;

    if (extractedDateObj.ampm) {
      
      if (extractedDateObj.ampm == 'AM') {
        await I.waitForElement(amXPath, 1);
        await I.scrollTo(amXPath);
        await I.click(amXPath);
        I.say('✅ Selected AM');
      } else {
        await I.waitForElement(pmXPath, 1);
        await I.scrollTo(pmXPath);
        await I.click(pmXPath);
        I.say('✅ Selected PM');
      }
      
    }
    I.wait(0.2);

    const continueBtn = '//div[contains(@class,"vdatetime-popup__actions__button--confirm")]';
    await I.waitForElement(continueBtn, 5);
    await I.click(continueBtn);
    I.say('✅ Date (and time if present) confirmed.');
    await I.wait(0.25);
    I.wait(0.2);


}

async function fillTreatingDoctorVisitingDates(I, loc, doaVal, dodVal) {
  // const doa = moment(doaVal, "DD-MM-YYYY hh:mm A", true);
  const doa =parseNormalizedDate(doaVal);
  const dod = parseNormalizedDate(dodVal);

  const partsDoa = extractDateParts(doa);
  const partsDod = extractDateParts(dod);

  console.log(JSON.stringify(partsDoa));
  console.log(JSON.stringify(partsDod));

  const diffdate = dod.diff(doa,"days")
  console.log("Diff between DOA and DOD",diffdate)



  const baseRowsXpath = "//*[@class='col-lg-6 align-top-grid align-top form-group']//div[@class='row']";
  let rowCount = await I.grabNumberOfVisibleElements(baseRowsXpath);
  let nextDayToAdd = doa;
  if(diffdate > 1){
    count = 1;
  for (let k = 0; k <= diffdate; k++) {
  // while(count <= diffdate){
    const currentRow = rowCount + k;           
    const addBtnXpath =
      `//*[@class='col-lg-6 align-top-grid align-top form-group']//div[@class='row'][${currentRow}]//div[@class='col-sm-3']//span//i`;
  
    await I.click(addBtnXpath);
    await I.wait(1);                          
  
    const newRow = currentRow + 1;
    // count++;             
    const newInputXpath =
      `//*[@class='col-lg-6 align-top-grid align-top form-group']//div[@class='row'][${newRow}]//div//div//input[contains(@class,'vdatetime-input')]`;
  
    await I.click(newInputXpath);
    nextDayToAdd = nextDayToAdd.add(1,'day');
    console.log("Pudhla din re zandu",nextDayToAdd);
    const nextDayParts = extractDateParts(nextDayToAdd);
    await fillDateValueWithExtractedDateObj(nextDayParts);
    await I.wait(5);
    // await I.fillField(newInputXpath);
    await I.wait(1);
  }

  }

}

async function handleQualificationAlwaysOthers(I, loc) {
    const dropdownXpath = loc.dropdown;
    const optionsXpath = loc.option;
  
    // Open dropdown
    await I.click(dropdownXpath);
  
    // Get currently selected value
    const selected = await I.grabTextFrom(dropdownXpath);
    const selectedLower = (selected || "").trim().toLowerCase();
  
    // If already selected "Others" → skip
    if (selectedLower === "others") {
        I.say("✔ 'Others' is already selected. Skipping.");
        return;
    }
  
    // Get all options
    const allOptions = await I.grabTextFromAll(optionsXpath);
    const normalized = allOptions.map(o => o.trim().toLowerCase());
  
    // Find "Others"
    const othersIndex = normalized.indexOf("others");
  
    if (othersIndex !== -1) {
        await I.click(`(${optionsXpath})[${othersIndex + 1}]`);
        I.say("✔ Selected 'Others' in Qualification dropdown.");
    } else {
        I.say("⚠ 'Others' option not found. Selecting first option as fallback.");
        await I.click(`(${optionsXpath})[1]`);
    }
  }

Feature('PDF to JSON & Open Chrome');

Scenario('Convert PDF, Validate JSON, and Open Browser', async () => {
  I.say('Starting PDF to JSON conversion...');

  const scriptPath = './test.py';
  const pdfFilePath = 'InputExample1.pdf';
  const outputFilePath = 'output.json';

  try {
    // 1️⃣ Run Python script
    const pythonOutput = await runPythonScript(scriptPath, [pdfFilePath, outputFilePath]);
    I.say(pythonOutput); // e.g., PDF to JSON converted successfully ✅
    // 2️⃣ Wait for JSON file
    await waitForFile(outputFilePath, 5000);
    // 3️⃣ Validate JSON content
    const content = fs.readFileSync(outputFilePath, 'utf-8');
    JSON.parse(content);
    I.say('✅ JSON file created and is valid!');
  } catch (e) {
    I.say(`❌ Process failed: ${e.message}`);
    throw e;
  }
  // Login 
  I.amOnPage('/');
  I.see("ZERO TOLERANCE TOWARDS FRAUD!");
  I.wait(10);
  I.fillField(LOCATORS.login.username, 'bullethealthcare@investigator.com');
  I.fillField(LOCATORS.login.password, 'Bullet@0408');
  I.wait(30);

  I.click(LOCATORS.searchbar.searchicon);
  I.wait(2);
  I.click(LOCATORS.searchbar.searchInput);
  I.wait(2);
  I.fillField(LOCATORS.searchbar.searchInput, "250246040P")
  I.wait(5);
  I.click(LOCATORS.searchbar.searchbtn);
  I.say("Searching for case");
  I.wait(5);

  I.click(LOCATORS.CaseIDClick);
  I.wait(5);
  I.click(LOCATORS.GenerateReportClick)
  I.wait(20);
  //----------------------------------
  const jsonData = JSON.parse(fs.readFileSync(outputFilePath, 'utf8'));

  async function fillAllFieldsFromJSON(jsonData, mapping) {
    for (const key in mapping) {
      const valueFromJson = jsonData[key];
      const target = mapping[key];


        // Put this inside fillAllFieldsFromJSON, where you iterate mapping keys (before generic handlers)
        if (key === "Treating Doctor Visiting Dates") {
          
          const loc = target;
          const doaVal = jsonData["DOA"] || '';
          const dodVal = jsonData["DOD"] || '';
            await fillTreatingDoctorVisitingDates(I, loc, doaVal, dodVal);
        }

        if (key === "Doctor Degree") {
            await handleQualificationAlwaysOthers(I, target);
            continue;
        }


      // ✅ Special handling for Qualification: match JSON "Qulification" value, else select "Other"
      // if (key === "Qualification") {
      //   // Support both object-style { dropdown, option } and array-style [dropdown, options, ...]
      //   let dropdownXpath;
      //   let optionsXpath;
      //   if (typeof target === "object" && !Array.isArray(target) && target.dropdown && target.option) {
      //     dropdownXpath = target.dropdown;
      //     optionsXpath = target.option;
      //   } else if (Array.isArray(target) && target.length >= 2) {
      //     dropdownXpath = target[0];
      //     optionsXpath = target[1];
      //   }

      //   if (dropdownXpath && optionsXpath) {
      //     const desiredValue = (jsonData["Qulification"] || valueFromJson || "").toString().trim();

      //     I.say(`Selecting Qualification → desired "${desiredValue || 'Other'}"`);
      //     I.scrollTo(dropdownXpath);
      //     I.wait(1);
      //     I.click(dropdownXpath);
      //     I.wait(1);

      //     // Try selecting the desired value; if not found, select "Other"
      //     const desiredLocator = { xpath: `${optionsXpath}[contains(normalize-space(.), "${desiredValue.replace(/"/g, '\\"')}")]` };
      //     const otherLocator = { xpath: `${optionsXpath}[contains(normalize-space(.), "Other")]` };
      //     let selected = false;
      //     if (desiredValue) {
      //       try {
      //         I.click(desiredLocator);
      //         selected = true;
      //       } catch (e) {
      //         // fall through to select "Other"
      //       }
      //     }
      //     if (!selected) {
      //       I.click(otherLocator);
      //     }
      //     I.wait(2);
      //     continue; // already handled
      //   }
      // }

    

      // 🧩 1️⃣ Handle dropdowns (with optional remark)
      if (typeof target === "object" && target.dropdown && target.option) {
        I.say(`Selecting dropdown for ${key}`);
        // Ensure element is in view and not covered by fixed footer
        I.scrollTo(target.dropdown);
        I.wait(1);
        I.click(target.dropdown);
        I.wait(2);
        I.click(target.option);
        I.wait(2);

        // Fill remark based on section logic
        if (target.remark) {
          let remarkValue = "SELF"; // default for general sections

          // ✅ If this is a DocumentsPD-type section, use "VERIFED"
          if (key === "Patient Id" || key === "Patient Photos" || key === "Medical Records" || key === "Evidence" || key === "Statement from Patient Audio / Video" || key === "Statement from Patient - Document" || key === "Patient Photos" || key === "Medical records from patient (Past & Present)" || key === "Prescriptions past and current" || key === "Diet plan document" || key === "Audio / Video recording - evidence" || key === "IPD / OT Paper" || key === "OPD & IPD Register Photos" || key === "Lab Report" || key === "Prescriptions past and current" || key === "Room Type Photo" || key === "Infrastructure Photos" || key === "Audio / Video recording - evidence" || key === "Ambulance Record" || key === "Pharmacy Records" || key === "Prescriptions past and current1" || key === "Diet Plan Document" || key === "Audio / Video recording - evidence" || key === "Written Statement of Treating Doctor" || key === "Medical Registration Copy" || key === "Consultation / Visiting hours - Document" || key === "Diet Plan Document" || key === "Doctor Attendence & Visit Register Photo" || key === "Audio / Video recording - Evidence" || key === "Written Statement of Treating Doctor - Audio / Video" || key === "Written Statement of Treating Doctor - Document" || key === "Medical Registration Copy" || key === "Consultation / Visiting hours - Document" || key === "Diet Plan Document" || key === "Audio / Video recording - Evidence" || key === "Backdated Records" || key === "Lab Register Photo" || key === "Discharge Summary" || key === "OPD & IPD Register Photos" || key === "Lab Report" || key === "Audio / Video recording - Evidence" || key === "Statement 1 - Audio / Video / Doc" || key === "Statement 2 - Audio / Video / Doc" || key === "Statement 3 - Audio / Video / Doc" || key === "Audio / Video Recording - Evidence" || key === "Hospital Bills" || key === "Cash Receipt" || key === "Pharmacy Bills" || key === "Ambulance Bills" || key === "Lab / Radiology Bills" || key === "Radiology Register Photo" || key === "Discharge Summary" || key === "OPD & IPD Register Photos" || key === "Radiology Report" || key === "Audio / Video recording - Evidence") {
            remarkValue = "VERIFIED";
          }

          I.say(`Filling remark for ${key} → ${remarkValue}`);
          I.fillField(target.remark, remarkValue);
          I.wait(2);
        }
      }

      // 🧩 2️⃣ Handle multiple input xpaths (arrays)
      else if (Array.isArray(target) && valueFromJson !== undefined) {
        let value = valueFromJson.toString().trim().replace(/\./g, "");
        for (const xpath of target) {
          I.fillField(xpath, value);
        }
      }

      // 🧩 3️⃣ Handle single input fields
      else if (typeof target === "string" && valueFromJson !== undefined) {
        // Trim and clean value
        // let value = valueFromJson.toString().trim().replace(/\./g, "");
        // 🧹 Clean input: remove special chars like ".", "/", "\", "#", "@", etc.
        let value = valueFromJson
          .toString()
          .trim()
          .replace(/[./\\#@!$%^&*()_+=\[\]{}|:;"'<>,?~`]/g, "") // remove special chars
          .replace(/\s{2,}/g, " "); // collapse multiple spaces to single


        // 🎯 Handle all date fields via popup (Patient DOB, DOA, DOD, etc.)
        // 🎯 Handle all date fields via popup (Patient DOB, DOA, DOD, etc.)
        const dateKeys = new Set(["Patient DOB", "DOA", "DOD"]);

        if (dateKeys.has(key)) {
          // 🧩 Skip if value is empty or null
          if (!value || value === "" || value.toLowerCase() === "null" || value.toLowerCase() === "na") {
            I.say(`⏩ Skipping date field "${key}" — no valid value found.`);
            continue; // skip this field and move to next
          }

          // normalize date value (if digits only)
          const digits = value.replace(/[^\d]/g, "");
          let normalized;
          if (digits.length === 8) {
            normalized = `${digits.substring(0, 2)}/${digits.substring(2, 4)}/${digits.substring(4)}`;
          } else {
            normalized = value;
          }

          // IMPORTANT: timepicker should be used ONLY for DOA and DOD.
          // For other date keys (e.g. Patient DOB) strip any time portion before calling picker.
          if (key !== "DOA" && key !== "DOD") {
            // remove any trailing time like " 11:25 AM" or " 08:30PM" etc.
            normalized = normalized.split(/\s+/)[0];
          }

          I.say(`📅 Filling date field "${key}" with "${normalized}"`);
          await pickVDatetime(I, target, normalized);
        } else {
          // 🧩 Normal input field
          await I.fillField(target, value);
        }
      }

    }
  }

  // "PatientDemographics", "DemographicsDetails", "DocumentsPD","", "StatementPatientDocumentsPD", "HospitalDetails", "HospitalDocumentsPD", "StatementfromTreatingDoctor", "TreatingDocterDocumentsPD", "StatementfromFamilyDoctor", "FamilyDoctorDocumentsPD", "PathologyLabPathologistdetails", "PathologistDocumentsPD", "VicinityVerification", "VicinityVerificationDocumentsPD", "PaymentReceiptsverifications", "PaymentDocumentsPD", "RadiologyCenter", "RadiologyCenterDocumentsPD", "QualityCheck", "Trigger"
  const groupedSections = [
    {
      mainOpen: formMapping.HospitalDetails.openMain,
      items: ["HospitalDetails"],
    }
  ];

  for (const group of groupedSections) {
    // open main section (icon) once
    I.scrollIntoView(group.mainOpen);
    I.wait(1);
    I.click(group.mainOpen);
    I.wait(2);

    for (const section of group.items) {
      I.say(`==== Filling ${section} ====`);

      // open sub section (actual screen)
      I.scrollIntoView(formMapping[section].openSub);
      I.wait(1);
      I.click(formMapping[section].openSub);
      I.wait(8);

      // ✅ Handle section-specific defaults
      if (section === "PatientDemographics") {
        if (!jsonData["Pincode"]) jsonData["Pincode"] = "111111";
        if (!jsonData["Landline Number"]) jsonData["Landline Number"] = "09000000000";
        jsonData["Patients Relation with Insured"] = "Other";
        jsonData["Patients Relation with Proposer"] = "Other";
      }

      if (section === "DemographicsDetails") {
        if (!jsonData["Distance between Residence and hospital (in kms)"]) {
          jsonData["Distance between Residence and hospital (in kms)"] = "00";
          I.say('Setting default "Distance between Residence and hospital (in kms)" to 00');
        }

        if (!jsonData["Observation & Findings in detail"]) {
          jsonData["Observation & Findings in detail"] = "VERIFED";
          I.say('setting Observation & Findings in detail to VERIFIED')
        }
      }
      if (section === "DocumentsPD") {
        jsonData["Patient Id"] = "No";
        jsonData["Patient Photos"] = "No";
        jsonData["Medical Records"] = "No";
        jsonData["Evidence"] = "No";
      }
      if (section === "StatementfromPatient") {
        jsonData["Mode of Payment"] = "Cash";
        if (!jsonData["Any Discount offered / Requested on Final Hospital bill"]) jsonData["Any Discount offered / Requested on Final Hospital bill"] = "00";

        jsonData["Is the patient accompanied by someone at the time of Visit"] = "No"
        if (!jsonData["Any Specific diet followed / Advised"]) jsonData["Any Specific diet followed / Advised"] = "NA";
        if (!jsonData["Reason for admission under specified doctor / hospital"]) jsonData["Reason for admission under specified doctor / hospital"] = "NA";
        if (!jsonData["Why Cashless Facilty is not availed?"]) jsonData["Why Cashless Facilty is not availed?"] = "NA";

        jsonData["Do you have health policy with any other insurance"] = "No";
        if (!jsonData["Other insurance details if any"]) jsonData["Other insurance details if any"] = "NA";

        jsonData["Audio / Video recording done"] = "Yes";
        jsonData["Any Previous Consultation?"] = "No";
      }
      if (section === "StatementPatientDocumentsPD") {
        jsonData["Statement from Patient Audio / Video"] = "No";
        jsonData["Statement from Patient - Document"] = "No";
        jsonData["Patient Photos"] = "No";
        jsonData["Medical records from patient (Past & Present)"] = "No";
        jsonData["Prescriptions past and current"] = "No";
        jsonData["Diet plan document"] = "No";
        jsonData["Audio / Video recording - evidence"] = "No";
      }

      if (section === "HospitalDetails") {
        jsonData["Hospital Cooperation"] = "Yes";
        if (!jsonData["Pincode"]) jsonData["Pincode"] = "111111";
        if (!jsonData["ICU & ICCU"]) jsonData["ICU & ICCU"] = "Yes";
        if (!jsonData["Other Findings / remarks"]) jsonData["Other Findings / remarks"] = "VERIFED";
        if (!jsonData["Any dues pending towards final bill amount / any discount offered on final bill"]) jsonData["Any dues pending towards final bill amount / any discount offered on final bill"] = "00";
        jsonData["Mode of Payment"] = "Cash";
        if (!jsonData["Name of the Medical Certificate issuing Authority"]) jsonData["Name of the Medical Certificate issuing Authority"] = "VERIFED";
        if (!jsonData["Whether the treating doctor is visiting doctor or Full time"]) jsonData["Whether the treating doctor is visiting doctor or Full time"] = "Full time";
        if (!jsonData["Is Indoor Case paper Collected?"]) jsonData["Is Indoor Case paper Collected?"] = "Yes";
        if (!jsonData["Audio / Video recording done"]) jsonData["Audio / Video recording done"] = "Yes";
      }

      if (section === "HospitalDocumentsHD") {
        jsonData["IPD / OT Paper"] = "No";
        jsonData["OPD & IPD Register Photos"] = "No";
        jsonData["Lab Report"] = "No";
        jsonData["Prescriptions past and current"] = "No";
        jsonData["Room Type Photo"] = "No";
        jsonData["Infrastructure Photos"] = "No";
        jsonData["Ambulance Record"] = "No";
        jsonData["Pharmacy Records"] = "No";
        jsonData["Prescriptions past and current1"] = "No";
        jsonData["Diet Plan Document"] = "No";
        jsonData["Audio / Video recording - evidence"] = "No";
      }
      if (section === "StatementfromTreatingDoctor") {
        if (!jsonData["Complain History"]) jsonData["Complain History"] = "VERIFIED";
        if (!jsonData["Consultation / Visiting hours - in this hospital"]) jsonData["Consultation / Visiting hours - in this hospital"] = "VERIFIED";
        if (!jsonData["Number of Visits done to the patient"]) jsonData["Number of Visits done to the patient"] = "2";
        if (!jsonData["Verification of doctor attendence / Visit Register"]) jsonData["Verification of doctor attendence / Visit Register"] = "VERIFIED";
        if (!jsonData["Reason for Admission"]) jsonData["Reason for Admission"] = "VERIFIED";
        if (!jsonData["Previous Medical / Surgical History / Treatment History"]) jsonData["Previous Medical / Surgical History / Treatment History"] = "VERIFIED";
        if (!jsonData["Any special diet?"]) jsonData["Any special diet?"] = "VERIFIED";
      }
      if (section === "TreatingDocterTDSTM") {
        jsonData["Written Statement of Treating Doctor"] = "No";
        jsonData["Medical Registration Copy"] = "No";
        jsonData["Consultation / Visiting hours - Document"] = "No";
        jsonData["Diet Plan Document"] = "No";
        jsonData["Doctor Attendence & Visit Register Photo"] = "No";
        jsonData["Audio / Video recording - Evidence"] = "No";
      }
      if (section === "StatementfromFamilyDoctor") {
        jsonData["Whether Statement from Family Doctor available?"] = "No";
      }
      if (section === "FamilyDoctorDocumentsFDSTM") {
        jsonData["Written Statement of Treating Doctor - Audio / Video"] = "No";
        jsonData["Written Statement of Treating Doctor - Document"] = "No";
        jsonData["Medical Registration Copy"] = "No";
        jsonData["Consultation / Visiting hours - Document"] = "No";
        jsonData["Diet Plan Document"] = "No";
        jsonData["Audio / Video recording - Evidence"] = "No";
        jsonData["Backdated Records"] = "No";
      }

      if (section === "PathologyLabPathologistdetails") {
        if (!jsonData["Pincode"]) jsonData["Pincode"] = "111111";
        if (!jsonData["Registered from Council"]) jsonData["Registered from Council"] = "VERIFIED";
        if (!jsonData["Pathology mannual register & Other findings"]) jsonData["Pathology mannual register & Other findings"] = "VERIFIED";
        jsonData["Who has signed the Pathology Report?"] = "Pathologist";
        jsonData["Whether any delegation of authority agreement between Pathologist & Lab"] = "Yes";
        if (!jsonData["Lab Register Observations"]) jsonData["Lab Register Observations"] = "VERIFIED";
        if (!jsonData["Other Findings / Remarks"]) jsonData["Other Findings / Remarks"] = "VERIFIED";
        if (!jsonData["Cross verification of Lab register and actual reports"]) jsonData["Cross verification of Lab register and actual reports"] = "VERIFIED";
        if (!jsonData["Cell counter reading matching"]) jsonData["Cell counter reading matching"] = "VERIFIED";
        if (!jsonData["Kit Test Verification"]) jsonData["Kit Test Verification"] = "VERIFIED";
        if (!jsonData["Lab is fully equipped with required instrument"]) jsonData["Lab is fully equipped with required instrument"] = "VERIFIED";
        if (!jsonData["All record up to the mark"]) jsonData["All record up to the mark"] = "VERIFIED";
      }
      if (section === "PathologistDocument") {
        jsonData["Lab Register Photo"] = "No";
        jsonData["Discharge Summary"] = "No";
        jsonData["Discharge Summary"] = "No";
        jsonData["Lab Report"] = "No";
        jsonData["Audio / Video recording - Evidence"] = "No";
      }
      if (section === "VicinityVerification") {
        if (!jsonData["Nearby Hospital Verification"]) jsonData["Nearby Hospital Verification"] = "Vicinity Done";
        if (!jsonData["Nearby Lab Verification"]) jsonData["Nearby Lab Verification"] = "Vicinity Done";
        if (!jsonData["Nearby Pharmacy Verification"]) jsonData["Nearby Pharmacy Verification"] = "Vicinity Done";
        if (!jsonData["Neighbour / Relative Verification"]) jsonData["Neighbour / Relative Verification"] = "Vicinity Done";
        if (!jsonData["Government Authority Verifiaction"]) jsonData["Government Authority Verifiaction"] = "Vicinity Done";
        if (!jsonData["Observation & Findings in detail"]) jsonData["Observation & Findings in detail"] = "VERIFIED";
      }
      if (section === "VicinityVerificationDocument") {
        jsonData["Statement 1 - Audio / Video / Doc"] = "No";
        jsonData["Statement 2 - Audio / Video / Doc"] = "No";
        jsonData["Statement 3 - Audio / Video / Doc"] = "No";
        jsonData["Audio / Video Recording - Evidence"] = "No";
      }

      if (section === "PaymentReceiptsverifications") {
        if (!jsonData["Cash receipts"]) jsonData["Cash receipts"] = "VERIFIED";
        if (!jsonData["Medicine Bill Verification"]) jsonData["Medicine Bill Verification"] = "Yes";
        if (!jsonData["Stock Register Status"]) jsonData["Stock Register Status"] = "VERIFIED";
        if (!jsonData["Pincode"]) jsonData["Pincode"] = "111111";
        if (!jsonData["State"]) jsonData["State"] = "MH";
        if (!jsonData["Bill Verification Findings"]) jsonData["Bill Verification Findings"] = "VERIFIED";
        if (!jsonData["Additional Information & Remarks"]) jsonData["Additional Information & Remarks"] = "VERIFIED";
        if (!jsonData["Other Insurance Policy Details"]) jsonData["Other Insurance Policy Details"] = "VERIFIED";
      }

      if (section === "VicinityVerificationDocument") {
        jsonData["Hospital Bills"] = "No";
        jsonData["Cash Receipt"] = "No";
        jsonData["Pharmacy Bills"] = "No";
        jsonData["Ambulance Bills"] = "No";
        jsonData["Lab / Radiology Bills"] = "No";
      }
      if (section === "RadiologyCenter") {
        if (!jsonData["Pincode"]) jsonData["Pincode"] = "111111";
        if (!jsonData["Registered from council"]) jsonData["Registered from council"] = "NA";
        if (!jsonData["Radiology mannual register & Other findings"]) jsonData["Radiology mannual register & Other findings"] = "NA";
        if (!jsonData["Lab Register Observations"]) jsonData["Lab Register Observations"] = "NA";
        jsonData["Who has signed the radiology Report?"] = "Others"
        if (!jsonData["If Others, please specify"]) jsonData["If Others, please specify"] = "NA";
        jsonData["Whether any delegation of authority agreement between Radiologist & Centre"] = "No"
        if (!jsonData["Cross verification of Lab register and actual reports"]) jsonData["Cross verification of Lab register and actual reports"] = "NA";
      }

      if (section === "RadiologyCenterDocument") {
        jsonData["Radiology Register Photo"] = "No";
        jsonData["Discharge Summary"] = "No";
        jsonData["OPD & IPD Register Photos"] = "No";
        jsonData["Radiology Report"] = "No";
        jsonData["Audio / Video recording - Evidence"] = "No";
      }
      if (section === "Trigger") {
        jsonData["Effective or not effective"] = "Not Effective";
        if (!jsonData["Investigator Remarks"]) jsonData["Investigator Remarks"] = "NA";
      }


      // fill all fields
      await fillAllFieldsFromJSON(jsonData, formMapping[section].fields);

      // save
      I.click(LOCATORS.saveForlaterbtn);
      I.wait(10);

      // next
      I.click(LOCATORS.nextBtn);
      I.wait(10);
    }
  }
});