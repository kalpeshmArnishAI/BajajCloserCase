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

    const scriptPath = './app.py';
    const pdfFilePath = 'input5.pdf';
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
    I.fillField(LOCATORS.searchbar.searchInput, "OC-26-1933-8403-00058422")
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

    // Helper function to handle popup
    // async function handlePopup() {
    //     try {
    //         const popupCount = await I.grabNumberOfVisibleElements(LOCATORS.confirmYesBtn);
    //         if (popupCount > 0) {
    //             I.say("Popup detected, clicking Yes");
    //             I.click(LOCATORS.confirmYesBtn);
    //             I.wait(2);
    //         } else {
    //             I.say("no popup");
    //         }
    //     } catch (e) {
    //         I.say(`Popup check failed: ${e.message}`);
    //     }
    // }

    // // Helper function to safely click dropdown option (handles click interception)
    // async function clickDropdownOption(optionXpath) {
    //     try {
    //         // First, scroll the option into view with extra space to avoid fixed buttons
    //         await I.executeScript((locator) => {
    //             try {
    //                 const result = document.evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    //                 const element = result.singleNodeValue;
    //                 if (element) {
    //                     // Scroll with extra offset to ensure it's above fixed buttons
    //                     const rect = element.getBoundingClientRect();
    //                     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //                     const targetY = scrollTop + rect.top - 150; // 150px offset to clear fixed buttons
    //                     window.scrollTo({ top: targetY, behavior: 'instant' });
    //                     return true;
    //                 }
    //             } catch (err) {
    //                 console.log('Scroll error:', err);
    //             }
    //             return false;
    //         }, optionXpath);
    //         I.wait(1); // Wait for scroll to complete
            
    //         // Try regular click first
    //         try {
    //             I.click(optionXpath);
    //             return true;
    //         } catch (clickError) {
    //             // If regular click fails (intercepted), use JavaScript click
    //             I.say(`Regular click intercepted, using JavaScript click`);
    //             try {
    //                 await I.executeScript((locator) => {
    //                     try {
    //                         const result = document.evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    //                         const element = result.singleNodeValue;
    //                         if (element) {
    //                             // Ensure element is visible and clickable
    //                             element.scrollIntoView({ behavior: 'instant', block: 'center' });
    //                             // Use dispatchEvent for more reliable click
    //                             const clickEvent = new MouseEvent('click', {
    //                                 view: window,
    //                                 bubbles: true,
    //                                 cancelable: true
    //                             });
    //                             element.dispatchEvent(clickEvent);
    //                             // Also try direct click as fallback
    //                             if (element.onclick) {
    //                                 element.click();
    //                             }
    //                             return true;
    //                         }
    //                     } catch (err) {
    //                         console.log('JS click error:', err);
    //                     }
    //                     return false;
    //                 }, optionXpath);
    //                 I.wait(0.5);
    //                 return true;
    //             } catch (jsError) {
    //                 I.say(`JavaScript click also failed: ${jsError.message}`);
    //                 return false;
    //             }
    //         }
    //     } catch (e) {
    //         I.say(`Error clicking dropdown option: ${e.message}`);
    //         return false;
    //     }
    // }

    // // Helper function to handle dropdown selection with matching logic
    // async function selectDropdownOption(dropdownOpenXpath, optionsXpath, valueToMatch) {
    //     try {
    //         // Open dropdown
    //         I.click(dropdownOpenXpath);
    //         I.wait(2);

    //         // Get all dropdown options
    //         const optionCount = await I.grabNumberOfVisibleElements(optionsXpath);
    //         I.say(`Found ${optionCount} dropdown options`);

    //         let matched = false;
    //         const normalizedValue = valueToMatch.trim().toUpperCase();

    //         // Check each option for match
    //         for (let i = 1; i <= optionCount; i++) {
    //             const optionXpath = `(${optionsXpath})[${i}]`;
    //             try {
    //                 const optionText = await I.grabTextFrom(optionXpath);
    //                 const normalizedOption = optionText.trim().toUpperCase();

    //                 I.say(`Checking option ${i}: "${optionText}" against "${valueToMatch}"`);

    //                 // Check for exact match or partial match
    //                 if (normalizedOption === normalizedValue ||
    //                     normalizedOption.includes(normalizedValue) ||
    //                     normalizedValue.includes(normalizedOption)) {
    //                     I.say(`Match found! Selecting: "${optionText}"`);
    //                     if (await clickDropdownOption(optionXpath)) {
    //                         matched = true;
    //                         I.wait(2);
    //                         break;
    //                     }
    //                 }
    //             } catch (e) {
    //                 I.say(`Error reading option ${i}: ${e.message}`);
    //             }
    //         }

    //         // If no match found, select "Other" or last option
    //         if (!matched) {
    //             I.say(`No match found for "${valueToMatch}", selecting "Other"`);
    //             // Try to find "Other" option
    //             let otherFound = false;
    //             for (let i = 1; i <= optionCount; i++) {
    //                 const optionXpath = `(${optionsXpath})[${i}]`;
    //                 try {
    //                     const optionText = await I.grabTextFrom(optionXpath);
    //                     if (optionText.trim().toUpperCase().includes("OTHER")) {
    //                         if (await clickDropdownOption(optionXpath)) {
    //                             otherFound = true;
    //                             I.wait(2);
    //                             break;
    //                         }
    //                     }
    //                 } catch (e) {
    //                     // Continue to next option
    //                 }
    //             }

    //             // If "Other" not found, select the last option
    //             if (!otherFound && optionCount > 0) {
    //                 const lastOptionXpath = `(${optionsXpath})[${optionCount}]`;
    //                 I.say(`Selecting last option as fallback`);
    //                 if (await clickDropdownOption(lastOptionXpath)) {
    //                     I.wait(2);
    //                 } else {
    //                     I.say(`Warning: Could not click last option`);
    //                 }
    //             }
    //         }
    //     } catch (e) {
    //         I.say(`Error in dropdown selection: ${e.message}`);
    //         throw e;
    //     }
    // }

    // // Helper function to check if field exists and is visible
    // async function checkFieldExists(xpath) {
    //     try {
    //         const count = await I.grabNumberOfVisibleElements(xpath);
    //         return count > 0;
    //     } catch (e) {
    //         return false;
    //     }
    // }

    // // Helper function to scroll element into view using JavaScript
    // async function scrollToElement(xpath) {
    //     try {
    //         // Use executeScript to scroll element into view
    //         await I.executeScript((locator) => {
    //             try {
    //                 const result = document.evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    //                 const element = result.singleNodeValue;
    //                 if (element) {
    //                     // Scroll element into view with center alignment
    //                     element.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'nearest' });
    //                     return true;
    //                 }
    //             } catch (err) {
    //                 // Silently handle errors
    //             }
    //             return false;
    //         }, xpath);
    //         // Minimal wait for scroll to complete
    //         I.wait(0.3);
    //     } catch (e) {
    //         // If scroll fails, continue - element might already be visible
    //     }
    // }

    // // Helper function to wait for field to be visible (without scrolling)
    // async function waitForField(xpath, timeout = 5) {
    //     const startTime = Date.now();
    //     const timeoutMs = timeout * 1000;

    //     while (Date.now() - startTime < timeoutMs) {
    //         try {
    //             if (await checkFieldExists(xpath)) {
    //                 return true;
    //             }
    //         } catch (e) {
    //             // Continue checking
    //         }
    //         I.wait(0.5);
    //     }
    //     return false;
    // }

    // // Helper function to fill field with retry and scrolling
    // async function fillFieldWithRetry(xpath, value, retries = 2) {
    //     for (let i = 0; i < retries; i++) {
    //         try {
    //             if (await waitForField(xpath, 5)) {
    //                 // Scroll to element before filling (only once)
    //                 await scrollToElement(xpath);

    //                 // Try to fill the field
    //                 try {
    //                     I.fillField(xpath, value);
    //                     I.wait(0.5);
    //                     I.say(`✓ Filled: ${xpath.substring(xpath.lastIndexOf('span[') + 5, xpath.lastIndexOf(']'))}`);
    //                     return true;
    //                 } catch (fillError) {
    //                     I.say(`Fill attempt ${i + 1} failed: ${fillError.message}`);
    //                     // Try scrolling again and retry only if not last attempt
    //                     if (i < retries - 1) {
    //                         await scrollToElement(xpath);
    //                         I.wait(1);
    //                     }
    //                 }
    //             } else {
    //                 I.say(`Field not visible, attempt ${i + 1}/${retries}`);
    //                 if (i < retries - 1) {
    //                     I.wait(1);
    //                 }
    //             }
    //         } catch (e) {
    //             I.say(`Attempt ${i + 1} error: ${e.message}`);
    //             if (i < retries - 1) {
    //                 I.wait(1);
    //             }
    //         }
    //     }
    //     // Don't throw error - just log and return false
    //     I.say(`⚠ Could not fill field: ${xpath.substring(xpath.lastIndexOf('span[') + 5, xpath.lastIndexOf(']'))}`);
    //     return false;
    // }

    async function fillAllFieldsFromJSON(jsonData, mapping) {
        // Wait for form to be ready - check if first field exists
        let firstFieldFound = false;
        for (const key in mapping) {
            const target = mapping[key];
            if (target && target !== '') {
                let firstXpath = '';
                if (Array.isArray(target)) {
                    // Skip dropdown arrays (Qualification has 2 elements)
                    if (target.length === 2) continue;
                    firstXpath = target[0];
                } else {
                    firstXpath = target;
                }
                if (firstXpath) {
                    I.say(`Waiting for form to load (checking: ${key})...`);
                    if (await waitForField(firstXpath, 10)) {
                        firstFieldFound = true;
                        break;
                    }
                }
            }
        }

        if (!firstFieldFound) {
            I.say('Form fields not immediately visible, waiting 5 seconds...');
            I.wait(5);
        }

        for (const key in mapping) {
            if (jsonData[key] !== undefined) {
                let value = jsonData[key];

                value = value.replace(/\./g, "").trim();

                if (key === "Patient DOB") {
                    value = value.replace(/[^\d]/g, "");
                    value = `${value.substring(0, 2)}/${value.substring(2, 4)}/${value.substring(4)}`;
                }

                const target = mapping[key];

                // Special handling for Qualification dropdown (array with 2 elements: [dropdownOpen, options])
                if (key === "Qualification" && Array.isArray(target) && target.length === 2) {
                    I.say(`Handling Qualification dropdown with value: "${value}"`);
                    await selectDropdownOption(
                        target[0],  // Dropdown open xpath
                        target[1],  // Dropdown options xpath
                        value
                    );
                    continue;
                }

                // if array → fill multiple xpaths
                if (Array.isArray(target)) {
                    for (const xpath of target) {
                        try {
                            await fillFieldWithRetry(xpath, value);
                        } catch (e) {
                            I.say(`Error filling field ${key} at ${xpath}: ${e.message}`);
                        }
                    }
                } else if (target !== '') {
                    try {
                        await fillFieldWithRetry(target, value);
                    } catch (e) {
                        I.say(`Error filling field ${key} at ${target}: ${e.message}`);
                    }
                }
            }
        }
    }

    const sections = ["PatientDemographics", "StatementfromPatient", "HospitalDetails", "StatementfromTreatingDoctor", "PathologyLabPathologistdetails", "PaymentReceiptsverifications", "RadiologyCenter", "QualityCheck"];

    for (const section of sections) {

        I.say(`==== Filling ${section} ====`);

        // open main section (icon)
        I.click(formMapping[section].openMain);
        I.wait(5);

        // open sub section (actual screen)
        I.click(formMapping[section].openSub);
        I.wait(5);

        // Wait a bit more for form to fully render
        // I.wait(3);

        // fill fields
        await fillAllFieldsFromJSON(jsonData, formMapping[section].fields);
        // save
        I.click(LOCATORS.saveForlaterbtn);
        I.wait(3);
        // Handle popup if it appears
        await handlePopup();
        I.wait(5);
    }

    I.wait(20);
});





















// // LogOut after process 
// I.click(LOCATORS.logout.usercard);
// I.wait(3);
// I.click(LOCATORS.logout.logoutbtn);
// I.say('User has been logout...!');