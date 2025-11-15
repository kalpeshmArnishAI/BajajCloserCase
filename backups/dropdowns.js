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
    const pdfFilePath = 'inputExample5.pdf';
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
    I.fillField(LOCATORS.searchbar.searchInput, "OC-26-1002-8403-00579166")
    I.wait(10);
    I.click(LOCATORS.searchbar.searchbtn);
    I.say("Searching for case ");
    I.wait(10);

    I.click(LOCATORS.CaseIDClick);
    I.wait(10);
    I.click(LOCATORS.GenerateReportClick)
    I.wait(20);
    // I.click(LOCATORS.PatientDemographics.clickOpen);
    // I.wait(5);
    // I.click(LOCATORS.PatientDemographics.clickPatientDemographics)
    // I.wait(10);
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
    async function fillAllFieldsFromJSON(jsonData, mapping) {
        for (const key in mapping) {
          const valueFromJson = jsonData[key];
          const target = mapping[key];
      
          // 🧩 1️⃣ Handle dropdowns (with optional remark)
          if (typeof target === "object" && target.dropdown && target.option) {
            I.say(`Selecting dropdown for ${key}`);
            I.click(target.dropdown);
            I.wait(3);
            I.click(target.option);
            I.wait(3);
      
            // If there’s a remark field, fill with SELF
            if (target.remark) {
              I.say(`Filling remark for ${key} → SELF`);
              I.fillField(target.remark, "SELF");
              I.wait(3);
            }
          }
      
          // 🧩 2️⃣ Handle multiple input xpaths (arrays)
          else if (Array.isArray(target) && valueFromJson !== undefined) {
            let value = valueFromJson.toString().trim().replace(/\./g, "");
            for (const xpath of target) {
              I.fillField(xpath, value);
            }
          }
      
          // 🧩 3️⃣ Handle single input field
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
      
      
    
// "HospitalDetails", "StatementfromTreatingDoctor", "PathologyLabPathologistdetails", "PaymentReceiptsverifications", "RadiologyCenter", "QualityCheck"
const sections = ["PatientDemographics","StatementfromPatient"];

for (const section of sections) {

    I.say(`==== Filling ${section} ====`);

    // open main section (icon)
    I.click(formMapping[section].openMain);
    I.wait(2);

    // open sub section (actual screen)
    I.click(formMapping[section].openSub);
    I.wait(5);

    // ✅ Add default pincode only for PatientDemographics
    if (section === "PatientDemographics") {
        // If JSON doesn’t include pincode, use default
        if (!jsonData["Pincode"] || jsonData["Pincode"].toString().trim() === "") {
            jsonData["Pincode"] = "111111";
            I.say("Setting default pincode: 111111");
        }
        // Default for Landline Number
    if (!jsonData["Landline Number"] || jsonData["Landline Number"].toString().trim() === "") {
        jsonData["Landline Number"] = "090000000";
        I.say("Setting default Landline Number: 09001001001");
    }
    jsonData["Patients Relation with Insured"] = "Other";
    jsonData["Patients Relation with Proposer"] = "Other";
    }

    // fill all fields (your existing helper)
    await fillAllFieldsFromJSON(jsonData, formMapping[section].fields);

    // save
    I.click(LOCATORS.saveForlaterbtn);
    I.wait(10);

    // next
    I.click(LOCATORS.nextBtn);
    I.wait(10);
}
});








