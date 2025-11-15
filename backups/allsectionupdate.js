const { spawn } = require('child_process');
const fs = require('fs');
const { I } = inject();
const { LOCATORS } = require("./locators");
// const fieldMap = require('./formMapping');
const formMapping = require('./formMapping');


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

Feature('PDF to JSON & Open Chrome');

Scenario('Convert PDF, Validate JSON, and Open Browser', async () => {
  I.say('Starting PDF to JSON conversion...');

  const scriptPath = './test.py';
  const pdfFilePath = 'InputExample8.pdf';
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
  I.fillField(LOCATORS.searchbar.searchInput, "OC-26-1933-8403-00058483")
  I.wait(10);
  I.click(LOCATORS.searchbar.searchbtn);
  I.say("Searching for case ");
  I.wait(10);

  I.click(LOCATORS.CaseIDClick);
  I.wait(10);
  I.click(LOCATORS.GenerateReportClick)
  I.wait(20);
  //----------------------------------
  const jsonData = JSON.parse(fs.readFileSync(outputFilePath, 'utf8'));
  //----------------------------------
  //  Main Logic
  // async function fillAllFieldsFromJSON(jsonData, mapping) {
  //     for(const key in mapping) {
  //         if(jsonData[key] !== undefined) {
  //             let value = jsonData[key];

  //             value = value.replace(/\./g,"").trim();

  //             if(key === "Patient DOB") {
  //                 value = value.replace(/[^\d]/g,"");
  //                 value = `${value.substring(0,2)}/${value.substring(2,4)}/${value.substring(4)}`;
  //             }

  //             const target = mapping[key];

  //             // if array → fill multiple xpaths
  //             if(Array.isArray(target)) {
  //                 for(const xpath of target) {
  //                     I.fillField(xpath, value);
  //                 }
  //             } else {
  //                 I.fillField(target, value);
  //             }
  //         }
  //     }
  // } 
  // async function fillAllFieldsFromJSON(jsonData, mapping) {
  //     for (const key in mapping) {
  //         const valueFromJson = jsonData[key];
  //         const target = mapping[key];

  //         // 🧩 1️⃣ Handle dropdowns (with optional remark)
  //         if (typeof target === "object" && target.dropdown && target.option) {
  //             I.say(`Selecting dropdown for ${key}`);
  //             I.click(target.dropdown);
  //             I.wait(3);
  //             I.click(target.option);
  //             I.wait(3);

  //             // If there’s a remark field, fill with SELF
  //             if (target.remark) {
  //                 I.say(`Filling remark for ${key} → SELF`);
  //                 I.fillField(target.remark, "SELF");
  //                 I.wait(3);
  //             }
  //         }

  //         // 🧩 2️⃣ Handle multiple input xpaths (arrays)
  //         else if (Array.isArray(target) && valueFromJson !== undefined) {
  //             let value = valueFromJson.toString().trim().replace(/\./g, "");
  //             for (const xpath of target) {
  //                 I.fillField(xpath, value);
  //             }
  //         }

  //         // 🧩 3️⃣ Handle single input field
  //         else if (typeof target === "string" && valueFromJson !== undefined) {
  //             let value = valueFromJson.toString().trim().replace(/\./g, "");
  //             if (key === "Patient DOB") {
  //                 value = value.replace(/[^\d]/g, "");
  //                 value = `${value.substring(0, 2)}/${value.substring(2, 4)}/${value.substring(4)}`;
  //             }
  //             I.fillField(target, value);
  //         }
  //     }
  // }

  async function fillAllFieldsFromJSON(jsonData, mapping) {
    for (const key in mapping) {
      const valueFromJson = jsonData[key];
      const target = mapping[key];

      // ✅ Special handling for Qualification: match JSON "Qulification" value, else select "Other"
      if (key === "Qualification") {
        // Support both object-style { dropdown, option } and array-style [dropdown, options, ...]
        let dropdownXpath;
        let optionsXpath;
        if (typeof target === "object" && !Array.isArray(target) && target.dropdown && target.option) {
          dropdownXpath = target.dropdown;
          optionsXpath = target.option;
        } else if (Array.isArray(target) && target.length >= 2) {
          dropdownXpath = target[0];
          optionsXpath = target[1];
        }

        if (dropdownXpath && optionsXpath) {
          const desiredValue = (jsonData["Qulification"] || valueFromJson || "").toString().trim();

          I.say(`Selecting Qualification → desired "${desiredValue || 'Other'}"`);
          I.scrollTo(dropdownXpath);
          I.wait(1);
          I.click(dropdownXpath);
          I.wait(1);

          // Try selecting the desired value; if not found, select "Other"
          const desiredLocator = { xpath: `${optionsXpath}[contains(normalize-space(.), "${desiredValue.replace(/"/g, '\\"')}")]` };
          const otherLocator = { xpath: `${optionsXpath}[contains(normalize-space(.), "Other")]` };
          let selected = false;
          if (desiredValue) {
            try {
              I.click(desiredLocator);
              selected = true;
            } catch (e) {
              // fall through to select "Other"
            }
          }
          if (!selected) {
            I.click(otherLocator);
          }
          I.wait(2);
          continue; // already handled
        }
      }

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
          if (key === "Patient Id" || key === "Patient Photos" || key === "Medical Records" || key === "Evidence" || key === "Statement from Patient Audio / Video" || key === "Statement from Patient - Document" || key === "Patient Photos" || key === "Medical records from patient (Past & Present)" || key === "Prescriptions past and current" || key === "Diet plan document" || key === "Audio / Video recording - evidence" || key === "IPD / OT Paper" || key === "OPD & IPD Register Photos" || key === "Lab Report" || key === "Prescriptions past and current" || key === "Room Type Photo"|| key === "Infrastructure Photos" || key === "Audio / Video recording - evidence" || key === "Ambulance Record" || key === "Pharmacy Records" || key === "Prescriptions past and current1" || key === "Diet Plan Document" || key === "Audio / Video recording - evidence"||key === "Written Statement of Treating Doctor" || key === "Medical Registration Copy" || key === "Consultation / Visiting hours - Document" || key === "Diet Plan Document" || key === "Doctor Attendence & Visit Register Photo" || key === "Audio / Video recording - Evidence"||key === "Written Statement of Treating Doctor - Audio / Video" ||
             key === "Written Statement of Treating Doctor - Document" || key === "Medical Registration Copy" || key === "Consultation / Visiting hours - Document" || key === "Diet Plan Document" || key === "Audio / Video recording - Evidence" || key === "Backdated Records"||key === "Lab Register Photo" || key === "Discharge Summary" || key === "OPD & IPD Register Photos" || key === "Lab Report" || key === "Audio / Video recording - Evidence"||key === "Statement 1 - Audio / Video / Doc" || key === "Statement 2 - Audio / Video / Doc" || key === "Statement 3 - Audio / Video / Doc" || key === "Audio / Video Recording - Evidence"|| key === "Hospital Bills" || key === "Cash Receipt" || key === "Pharmacy Bills" || key === "Ambulance Bills" || key === "Lab / Radiology Bills"|| key === "Radiology Register Photo" || key === "Discharge Summary" || key === "OPD & IPD Register Photos" || key === "Radiology Report" || key === "Audio / Video recording - Evidence") {
            remarkValue = "VERIFIED";
          }

          I.say(`Filling remark for ${key} → ${remarkValue}`);
          I.fillField(target.remark, remarkValue);
          I.wait(2);

          // if () {
          //   remarkValue = "VERIFIED";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);

          // if () {
          //   remarkValue = "VERIFIED";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);

          // if () {
          //   remarkValue = "VERIFIED";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);

          // if () {
          //   remarkValue = "VERIFIED";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);

          // if () {
          //   remarkValue = "VERIFIED";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);

          // if () {
          //   remarkValue = "VERIFIED";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);

          // if () {
          //   remarkValue = "VERIFIED";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);

          // if () {
          //   remarkValue = "NA";
          // }
          // I.say(`Filling remark for ${key} → ${remarkValue}`);
          // I.fillField(target.remark, remarkValue);
          // I.wait(2);
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
        let value = valueFromJson.toString().trim().replace(/\./g, "");
        if (key === "Patient DOB") {
          value = value.replace(/[^\d]/g, "");
          value = `${value.substring(0, 2)}/${value.substring(2, 4)}/${value.substring(4)}`;
        }
        I.fillField(target, value);
      }
    }
  }


  // "StatementfromPatient", "HospitalDetails", "StatementfromTreatingDoctor", "PathologyLabPathologistdetails", "PaymentReceiptsverifications", "RadiologyCenter", "QualityCheck"
  // Open PatientDemographics main once, then iterate its sub sections
  // "PatientDemographics","DemographicsDetails","DocumentsPD","StatementfromPatient","StatementPatientDocumentsPD","HospitalDetails","HospitalDocumentsPD","StatementfromTreatingDoctor","TreatingDocterDocumentsPD",
  const groupedSections = [
    {
      mainOpen: formMapping.StatementfromFamilyDoctor.openMain,
      items: ["StatementfromFamilyDoctor","FamilyDoctorDocumentsPD","PathologyLabPathologistdetails","PathologistDocumentsPD","VicinityVerification","VicinityVerificationDocumentsPD","PaymentReceiptsverifications","PaymentDocumentsPD","RadiologyCenter","RadiologyCenterDocumentsPD","QualityCheck"],
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
        if(!jsonData["Other Findings / Remarks"]) jsonData["Other Findings / Remarks"] = "VERIFIED";
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


      if(section === "RadiologyCenter"){
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