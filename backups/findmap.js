// const { LOCATORS } = require('./locators');
// module.exports = {
//     PatientDemographics: {
//         openMain: LOCATORS.PatientDemographics.clickOpen,
//         openSub: LOCATORS.PatientDemographics.clickPatientDemographics,
//         fields: {
//             "Patient Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//             // "Patient DOB": '//*[@class="row align-top"]//span[5]//div//div[2]//input',
//             "Residence Address": [
//                 '//*[@class="row align-top"]//span[11]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[13]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[15]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[16]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[17]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[18]//div//div[2]//input'
//             ],
//             "Residence Contact No": '//*[@class="row align-top"]//span[21]//div//div[2]//input',
//             "Email Address of Patient/Insured": '//*[@class="row align-top"]//span[23]//div//div[2]//input',
//             "Pincode": [
//                 '//*[@class="row align-top"]//span[12]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[20]//div//div[2]//input'
//             ],
//             "Landline Number": '//*[@class="row align-top"]//span[22]//div//div[2]//input',
//             // ✅ Dropdowns
//             "Patients Relation with Insured": {
//                 // dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
//                 // option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[8]' // "Other"
//                 dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[8]',
//                 remark: '//*[@class="row align-top"]//span[25]//div//div[2]//div//textarea'
//             },
//             "Patients Relation with Proposer": {
//                 // dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
//                 // option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[8]' // "Other"
//                 dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[8]',
//                 remark: '//*[@class="row align-top"]//span[27]//div//div[2]//div//textarea'
//             },
//             "Remarks" : '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
//         }
//     },
//     DemographicsDetails : {
//         openMain: LOCATORS.PatientDemographics.clickOpen,
//         openSub: LOCATORS.PatientDemographics.clickDemographicsDetails,
//         fields : {
//             "Distance between Residence and hospital (in kms)" : [
//                    '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//                    '//*[@class="row align-top"]//span[2]//div//div[2]//input',
//                    '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//                    '//*[@class="row align-top"]//span[4]//div//div[2]//input'
//             ],
//             "Observation & Findings in detail" : '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea'
//         }
//     },
//     DocumentsPD : {
//         openMain: LOCATORS.PatientDemographics.clickOpen,
//         openSub: LOCATORS.PatientDemographics.clickDocumentsPD,
//         fields : {

//            "Patient Id" : {
//                  dropdown : '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                  option  : '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                  remark : '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//            },
//            "Patient Photos" : {
//             dropdown : '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//            },
//            "Medical Records" : {
//             dropdown : '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//            },
//            "Evidence" : {
//             dropdown : '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//            }
//         }
//     },



//     StatementfromPatient: {
//         openMain: LOCATORS.StatementfromPatient.clickOpen,
//         openSub: LOCATORS.StatementfromPatient.ClickStatementfromPatient,
//         fields: {
//             "Presenting complains" : '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
//             "No. of days hospitalized": '//*[@class="row align-top"]//span[2]//div//div[2]//input',
//             "Total cost of treatment": '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//             "Final bill of hospital": '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//             // "DOA" : '//*[@class="row align-top"]//span[7]//div//div[2]//input',
//             // "DOD" : '//*[@class="row align-top"]//span[8]//div//div[2]//input',
//             "Mode of Payment": {
//                     dropdown: '//*[@class="row align-top"]//span[5]//div//div[2]//select',
//                    option: '//*[@class="row align-top"]//span[5]//div//div[2]//select//option[9]'
//             },
//             "Any Discount offered / Requested on Final Hospital bill" : '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea',
//             "Treating Doctor Name": '//*[@class="row align-top"]//span[9]//div//div[2]//input',

//             "Is the patient accompanied by someone at the time of Visit" : {
//                     dropdown: '//*[@class="row align-top"]//span[11]//div//div[2]//select',
//                     option: '//*[@class="row align-top"]//span[11]//div//div[2]//select//option[2]'
//             },
//             "Any Specific diet followed / Advised" : '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
//             "Reason for admission under specified doctor / hospital" : '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
//             "Why Cashless Facilty is not availed?": '//*[@class="row align-top"]//span[14]//div//div[2]//textarea',

//             "Do you have health policy with any other insurance" :{
//                    dropdown: '//*[@class="row align-top"]//span[15]//div//div[2]//select',
//                    option: '//*[@class="row align-top"]//span[15]//div//div[2]//select//option[2]'
//             },
//             "Other insurance details if any" : '//*[@class="row align-top"]//span[16]//div//div[2]//div//textarea',

//             "Audio / Video recording done" : {
//                 dropdown: '//*[@class="row align-top"]//span[17]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[17]//div//div[2]//select//option[1]'
//             },
//             "Any Previous Consultation?" : {
//                 dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]'
//             },
//             "Remarks": '//*[@class="row align-top"]//span[20]//div//div[2]//div//textarea'
//         }
//     },
//     StatementPatientDocumentsPD : {
//         openMain: LOCATORS.StatementfromPatient.clickOpen,
//         openSub: LOCATORS.StatementfromPatient.clickStatementPatientDocumentsPD,
//         fields : {
//            "Statement from Patient Audio / Video" : {
//                  dropdown : '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                  option  : '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                  remark : '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//            },
//            "Statement from Patient - Document" : {
//             dropdown : '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//            },
//            "Patient Photos" : {
//             dropdown : '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//            },
//            "Medical records from patient (Past & Present)" : {
//             dropdown : '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//            },
//            "Prescriptions past and current" : {
//             dropdown : '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//            },
//            "Diet plan document" : {
//             dropdown : '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
//            },
//            "Audio / Video recording - evidence":{
//             dropdown : '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//             option  : '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
//            }
//         }
//     },

//     HospitalDetails : {
//         openMain: LOCATORS.HospitalDetails.clickOpen,
//         openSub:  LOCATORS.HospitalDetails.clickHospitalDetails,
//         fields: { 
//                 "Hospital Cooperation" : {
//                     dropdown : '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                     option : '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[1]',
//                 },
//                 "Hospital Name." : '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//                 "Registration No" : '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//                 "Address." : [
//                         '//*[@class="row align-top"]//span[6]//div//div[2]//input',
//                         '//*[@class="row align-top"]//span[8]//div//div[2]//input',
//                         '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//                 ],
//                 "Pincode" :'//*[@class="row align-top"]//span[7]//div//div[2]//input',
//                 "Total no of beds" : '//*[@class="row align-top"]//span[11]//div//div[2]//input',
//                 "ICU & ICCU" :{
//                     dropdown : '//*[@class="row align-top"]//span[12]//div//div[2]//select',
//                     option : '//*[@class="row align-top"]//span[12]//div//div[2]//select//option[1]',
//                 },
//                 "Other Findings / remarks" :'//*[@class="row align-top"]//span[13]//div//div[2]//div//textarea',
//                 "No. of days hospitalized" : '//*[@class="row align-top"]//span[14]//div//div[2]//input',
//                 "Total cost of treatment"  : '//*[@class="row align-top"]//span[15]//div//div[2]//input',
//                 "Final bill of hospital" : '//*[@class="row align-top"]//span[16]//div//div[2]//input',
//                 "Any dues pending towards final bill amount / any discount offered on final bill" : '//*[@class="row align-top"]//span[17]//div//div[2]//input',
//                 "Mode of Payment":{
//                     dropdown : '//*[@class="row align-top"]//span[18]//div//div[2]//select',
//                     option : '//*[@class="row align-top"]//span[18]//div//div[2]//select//option[1]',
//                 },
//                 "Treating Doctor Name" :'//*[@class="row align-top"]//span[19]//div//div[2]//input',
//                 "Qualification" : [
//                     '//*[@class="row align-top"]//span[20]//div//div[2]//div//div',  // Dropdown open xpath
//                     '//*[@class="row align-top"]//span[20]//div//div[2]//div[3]//ul//li//span'  // Dropdown options xpath
//                 ],
//                 "Registration number" : '//*[@class="row align-top"]//span[21]//div//div[2]//input',
//                 "Name of the Medical Certificate issuing Authority" :'//*[@class="row align-top"]//span[23]//div//div[2]//input',
//                 "Whether the treating doctor is visiting doctor or Full time" :{
//                     dropdown : '//*[@class="row align-top"]//span[24]//div//div[2]//select',
//                     option : '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[2]',
//                 },
//                 "Is Indoor Case paper Collected?" :{
//                     dropdown : '//*[@class="row align-top"]//span[26]//div//div[2]//select',
//                     option : '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[1]',
//                 },
//                 "Audio / Video recording done":{
//                     dropdown : '//*[@class="row align-top"]//span[27]//div//div[2]//select',
//                     option : '//*[@class="row align-top"]//span[27]//div//div[2]//select//option[1]',
//                 },
//                 "Indoor Case Paper observation" : '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
//             }
//     },
//     HospitalDocumentsHD : {
//         openMain: LOCATORS.HospitalDetails.clickOpen,
//         openSub:  LOCATORS.HospitalDetails.clickDocumentsHD,
//         fields: {
//             "IPD / OT Paper" : {
//                 dropdown : '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option : '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark : '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//            "OPD & IPD Register Photos" : {
//             dropdown : '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//            },
//            "Lab Report":{
//             dropdown : '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//            },
//            "Prescriptions past and current":{
//             dropdown : '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//            },
//            "Room Type Photo":{
//             dropdown : '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//            },
//            "Infrastructure Photos":{
//             dropdown : '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
//            },
//            "Ambulance Record":{
//             dropdown : '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
//            },
//            "Pharmacy Records":{
//             dropdown : '//*[@class="row align-top"]//span[22]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[22]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[24]//div//div[2]//textarea'
//            },
//            "Prescriptions past and current":{
//             dropdown : '//*[@class="row align-top"]//span[25]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[25]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[27]//div//div[2]//textarea'
//            },
//            "Diet Plan Document":{
//             dropdown : '//*[@class="row align-top"]//span[28]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[28]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[30]//div//div[2]//textarea'
//            },
//            "Audio / Video recording - evidence":{
//             dropdown : '//*[@class="row align-top"]//span[31]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[31]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[33]//div//div[2]//textarea'
//         }
//     },
//     },



//     StatementfromTreatingDoctor : {
//         openMain: LOCATORS.StatementfromTreatingDoctor.clickOpen,
//         openSub:  LOCATORS.StatementfromTreatingDoctor.clickTreatingDoctorDetails,
//         fields : {

//               "Treating Doctor Name" : '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//               "Qualification" : [
//                 '//*[@class="row align-top"]//span[2]//div//div[2]//div//div',
//                 '//*[@class="row align-top"]//span[2]//div//div[2]//div[3]//ul//li//span',
//                 '//*[@class="row align-top"]//span[4]//div//div[2]//input'
//               ],
//               "Registration number" : '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//               "Complain History" : '//*[@class="row align-top"]//span[5]//div//div[2]//textarea',
//               "Total cost of treatment" : '//*[@class="row align-top"]//span[6]//div//div[2]//input',
//               "Consultation / Visiting hours - in this hospital" : '//*[@class="row align-top"]//span[9]//div//div[2]//div/textarea',
//               "Number of Visits done to the patient" : '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//               "Verification of doctor attendence / Visit Register" : '//*[@class="row align-top"]//span[11]//div//div[2]//div/textarea',
//               "Diagnosis" : '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
//               "Reason for Admission" : '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
//               "Previous Medical / Surgical History / Treatment History" : '//*[@class="row align-top"]//span[14]//div//div[2]//textarea',
//               "Any special diet?" : '//*[@class="row align-top"]//span[15]//div//div[2]//textarea',
//               "Details of Statement issued by Treating Doctor Visit findings": '//*[@class="row align-top"]//span[16]//div//div[2]//div//textarea'
//         }
//     },

//     TreatingDocterTDSTM : {
//         openMain: LOCATORS.StatementfromTreatingDoctor.clickOpen,
//         openSub:  LOCATORS.StatementfromTreatingDoctor.clickDocumentsTDSTM,
//         fields :{
//             "Written Statement of Treating Doctor" : {
//                 dropdown : '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option : '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark : '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//            "Medical Registration Copy" : {
//             dropdown : '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//            },
//            "Consultation / Visiting hours - Document":{
//             dropdown : '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//            },
//            "Diet Plan Document":{
//             dropdown : '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//            },
//            "Doctor Attendence & Visit Register Photo":{
//             dropdown : '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//            },
//            "Audio / Video recording - Evidence":{
//             dropdown : '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//             option : '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//             remark : '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
//            }
          
//         }
    
//     }















//     // PathologyLabPathologistdetails : {
//     //     openMain: LOCATORS.PathologyLabPathologistdetails.clickOpen,
//     //     openSub:  LOCATORS.PathologyLabPathologistdetails.clickPathologistDetails,
//     //     fields : { 
//     //             "Pathology Center Name":'//*[@class="row align-top"]//span[1]//div//div[2]//input',
//     //             "Registration No_2" : '//*[@class="row align-top"]//span[11]//div//div[2]//input',
//     //             "Address._2" : [
//     //                     '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//     //                     '//*[@class="row align-top"]//span[6]//div//div[2]//input',
//     //                     '//*[@class="row align-top"]//span[8]//div//div[2]//input',
//     //                     '//*[@class="row align-top"]//span[14]//div//div[2]//input',
//     //                     '//*[@class="row align-top"]//span[16]//div//div[2]//input',
//     //                     '//*[@class="row align-top"]//span[17]//div//div[2]//input',
//     //                     '//*[@class="row align-top"]//span[18]//div//div[2]//input'
//     //                 ],
//     //             "Pathologist Doctor Name" :'//*[@class="row align-top"]//span[10]//div//div[2]//input',
//     //             "Details of Statement issued by Pathologist Doctor Visit findings" : '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
//     //     }
//     // },
//     // PaymentReceiptsverifications : {
//     //     openMain: LOCATORS.PaymentReceiptsverifications.clickOpen,
//     //     openSub:  LOCATORS.PaymentReceiptsverifications.clickPharmacyDetails,
//     //     fields : { 
//     //               "Final bill of hospital" : '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
//     //               "Pharmacy Name" : '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//     //               "Pharmacy Address complete"  : [
//     //                         '//*[@class="row align-top"]//span[5]//div//div[2]//input',
//     //                         '//*[@class="row align-top"]//span[7]//div//div[2]//input',
//     //                         '//*[@class="row align-top"]//span[9]//div//div[2]//input', 
//     //                     ],
//     //               "Licensee number": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//     //               "Pharmacy Visit Findings" : '//*[@class="row align-top"]//span[15]//div//div[2]//div//textarea'
//     //     }
//     // },
//     // RadiologyCenter : {
//     //     openMain: LOCATORS.RadiologyCenter.clickOpen,
//     //     openSub:  LOCATORS.RadiologyCenter.clickRadiologyCenter,
//     //     fields : { 
//     //              "Radiology Center Name" : '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//     //              "Registration number_2" : '//*[@class="row align-top"]//span[2]//div//div[2]//input',
//     //              "Radiology Center Address." : [
//     //                 '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//     //                 '//*[@class="row align-top"]//span[5]//div//div[2]//input',
//     //                 '//*[@class="row align-top"]//span[7]//div//div[2]//input'
//     //              ],
//     //              "Radiologist Doctor Name" : '//*[@class="row align-top"]//span[9]//div//div[2]//input',
//     //              "Registration number_2": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//     //              "Details of Statement issued by Radiologist / Visit findings":'//*[@class="row align-top"]//span[18]//div//div[2]//div//textarea'
//     //     }
//     // },
//     // QualityCheck : {
//     //     openMain: LOCATORS.QualityCheck.clickOpen,
//     //     openSub:  LOCATORS.QualityCheck.clickQualityCheck,
//     //     fields : { 
//     //                 "Conclusion / recommendation" : [
//     //                             '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea',
//     //                             '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea',
//     //                             '//*[@class="row align-top"]//span[9]//div//div[2]//div//textarea'        
//     //                 ]
//     //     }
//     // }
// }




// const { LOCATORS } = require('./locators');
// module.exports = {
//     PatientDemographics: {
//         openMain: LOCATORS.PatientDemographics.clickOpen,
//         openSub: LOCATORS.PatientDemographics.clickPatientDemographics,
//         fields: {
//             "Patient Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//             // "Patient DOB": '//*[@class="row align-top"]//span[5]//div//div[2]//input',
//             "Residence Address": [
//                 '//*[@class="row align-top"]//span[11]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[13]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[15]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[16]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[17]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[18]//div//div[2]//input'
//             ],
//             "Residence Contact No": '//*[@class="row align-top"]//span[21]//div//div[2]//input',
//             "Email Address of Patient/Insured": '//*[@class="row align-top"]//span[23]//div//div[2]//input',
//             "Pincode": [
//                 '//*[@class="row align-top"]//span[12]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[20]//div//div[2]//input'
//             ],
//             "Landline Number": '//*[@class="row align-top"]//span[22]//div//div[2]//input',
//             // ✅ Dropdowns
//             "Patients Relation with Insured": {
//                 // dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
//                 // option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[8]' // "Other"
//                 dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[8]',
//                 remark: '//*[@class="row align-top"]//span[25]//div//div[2]//div//textarea'
//             },
//             "Patients Relation with Proposer": {
//                 // dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
//                 // option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[8]' // "Other"
//                 dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[8]',
//                 remark: '//*[@class="row align-top"]//span[27]//div//div[2]//div//textarea'
//             },
//             "Remarks": '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
//         }
//     },
//     DemographicsDetails: {
//         openMain: LOCATORS.PatientDemographics.clickOpen,
//         openSub: LOCATORS.PatientDemographics.clickDemographicsDetails,
//         fields: {
//             "Distance between Residence and hospital (in kms)": [
//                 '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[2]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[4]//div//div[2]//input'
//             ],
//             "Observation & Findings in detail": '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea'
//         }
//     },
//     DocumentsPD: {
//         openMain: LOCATORS.PatientDemographics.clickOpen,
//         openSub: LOCATORS.PatientDemographics.clickDocumentsPD,
//         fields: {

//             "Patient Id": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Patient Photos": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "Medical Records": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             }
//         }
//     },

//     StatementfromPatient: {
//         openMain: LOCATORS.StatementfromPatient.clickOpen,
//         openSub: LOCATORS.StatementfromPatient.ClickStatementfromPatient,
//         fields: {
//             "Presenting complains": '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
//             "No. of days hospitalized": '//*[@class="row align-top"]//span[2]//div//div[2]//input',
//             "Total cost of treatment": '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//             "Final bill of hospital": '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//             // "DOA" : '//*[@class="row align-top"]//span[7]//div//div[2]//input',
//             // "DOD" : '//*[@class="row align-top"]//span[8]//div//div[2]//input',
//             "Mode of Payment": {
//                 dropdown: '//*[@class="row align-top"]//span[5]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[5]//div//div[2]//select//option[9]'
//             },
//             "Any Discount offered / Requested on Final Hospital bill": '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea',
//             "Treating Doctor Name": '//*[@class="row align-top"]//span[9]//div//div[2]//input',

//             "Is the patient accompanied by someone at the time of Visit": {
//                 dropdown: '//*[@class="row align-top"]//span[11]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[11]//div//div[2]//select//option[2]'
//             },
//             "Any Specific diet followed / Advised": '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
//             "Reason for admission under specified doctor / hospital": '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
//             "Why Cashless Facilty is not availed?": '//*[@class="row align-top"]//span[14]//div//div[2]//textarea',

//             "Do you have health policy with any other insurance": {
//                 dropdown: '//*[@class="row align-top"]//span[15]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[15]//div//div[2]//select//option[2]'
//             },
//             "Other insurance details if any": '//*[@class="row align-top"]//span[16]//div//div[2]//div//textarea',

//             "Audio / Video recording done": {
//                 dropdown: '//*[@class="row align-top"]//span[17]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[17]//div//div[2]//select//option[1]'
//             },
//             "Any Previous Consultation?": {
//                 dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]'
//             },
//             "Remarks": '//*[@class="row align-top"]//span[20]//div//div[2]//div//textarea'
//         }
//     },
//     StatementPatientDocumentsPD: {
//         openMain: LOCATORS.StatementfromPatient.clickOpen,
//         openSub: LOCATORS.StatementfromPatient.clickStatementPatientDocumentsPD,
//         fields: {
//             "Statement from Patient Audio / Video": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Statement from Patient - Document": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "Patient Photos": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Medical records from patient (Past & Present)": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             },
//             "Prescriptions past and current": {
//                 dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//             },
//             "Diet plan document": {
//                 dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
//             },
//             "Audio / Video recording - evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
//             }
//         }
//     },

//     HospitalDetails: {
//         openMain: LOCATORS.HospitalDetails.clickOpen,
//         openSub: LOCATORS.HospitalDetails.clickHospitalDetails,
//         fields: {
//             "Hospital Cooperation": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[1]',
//             },
//             "Hospital Name.": '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//             "Registration No": '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//             "Address.": [
//                 '//*[@class="row align-top"]//span[6]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[8]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//             ],
//             "Pincode": '//*[@class="row align-top"]//span[7]//div//div[2]//input',
//             "Total no of beds": '//*[@class="row align-top"]//span[11]//div//div[2]//input',
//             "ICU & ICCU": {
//                 dropdown: '//*[@class="row align-top"]//span[12]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[12]//div//div[2]//select//option[1]',
//             },
//             "Other Findings / remarks": '//*[@class="row align-top"]//span[13]//div//div[2]//div//textarea',
//             "No. of days hospitalized": '//*[@class="row align-top"]//span[14]//div//div[2]//input',
//             "Total cost of treatment": '//*[@class="row align-top"]//span[15]//div//div[2]//input',
//             "Final bill of hospital": '//*[@class="row align-top"]//span[16]//div//div[2]//input',
//             "Any dues pending towards final bill amount / any discount offered on final bill": '//*[@class="row align-top"]//span[17]//div//div[2]//input',
//             "Mode of Payment": {
//                 dropdown: '//*[@class="row align-top"]//span[18]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[18]//div//div[2]//select//option[1]',
//             },
//             "Treating Doctor Name": '//*[@class="row align-top"]//span[19]//div//div[2]//input',
//             // "Qualification" : {
//             //    dropdown : '//*[@class="row align-top"]//span[20]//div//div[2]//div//div',  // Dropdown open xpath
//             //     option : '//*[@class="row align-top"]//span[20]//div//div[2]//div[3]//ul//li//span'  // Dropdown options xpath
//             // },
//             "Registration number": '//*[@class="row align-top"]//span[21]//div//div[2]//input',
//             "Name of the Medical Certificate issuing Authority": '//*[@class="row align-top"]//span[23]//div//div[2]//input',
//             "Whether the treating doctor is visiting doctor or Full time": {
//                 dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[2]',
//             },
//             "Is Indoor Case paper Collected?": {
//                 dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[1]',
//             },
//             "Audio / Video recording done": {
//                 dropdown: '//*[@class="row align-top"]//span[27]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[27]//div//div[2]//select//option[1]',
//             },
//             "Indoor Case Paper observation": '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
//         }
//     },
//     HospitalDocumentsPD: {
//         openMain: LOCATORS.HospitalDetails.clickOpen,
//         openSub: LOCATORS.HospitalDetails.clickDocumentsHD,
//         fields: {
//             "IPD / OT Paper": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "OPD & IPD Register Photos": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "Lab Report": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Prescriptions past and current": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             },
//             "Room Type Photo": {
//                 dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//             },
//             "Infrastructure Photos": {
//                 dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
//             },
//             "Ambulance Record": {
//                 dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
//             },
//             "Pharmacy Records": {
//                 dropdown: '//*[@class="row align-top"]//span[22]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[22]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[24]//div//div[2]//textarea'
//             },
//             "Prescriptions past and current": {
//                 dropdown: '//*[@class="row align-top"]//span[25]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[25]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[27]//div//div[2]//textarea'
//             },
//             "Diet Plan Document": {
//                 dropdown: '//*[@class="row align-top"]//span[28]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[28]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[30]//div//div[2]//textarea'
//             },
//             "Audio / Video recording - evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[31]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[31]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[33]//div//div[2]//textarea'
//             }
//         }
//     },

//     StatementfromTreatingDoctor: {
//         openMain: LOCATORS.StatementfromTreatingDoctor.clickOpen,
//         openSub: LOCATORS.StatementfromTreatingDoctor.clickTreatingDoctorDetails,
//         fields: {

//             "Treating Doctor Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//             "Qualification": {
//                 dropdown: '//*[@class="row align-top"]//span[2]//div//div[2]//div//div',
//                 option: '//*[@class="row align-top"]//span[2]//div//div[2]//div[3]//ul//li//span',
//                 // '//*[@class="row align-top"]//span[4]//div//div[2]//input'
//             },
//             "Registration number": '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//             "Complain History": '//*[@class="row align-top"]//span[5]//div//div[2]//textarea',
//             "Total cost of treatment": '//*[@class="row align-top"]//span[6]//div//div[2]//input',
//             "Consultation / Visiting hours - in this hospital": '//*[@class="row align-top"]//span[9]//div//div[2]//div/textarea',
//             "Number of Visits done to the patient": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//             "Verification of doctor attendence / Visit Register": '//*[@class="row align-top"]//span[11]//div//div[2]//div/textarea',
//             "Diagnosis": '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
//             "Reason for Admission": '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
//             "Previous Medical / Surgical History / Treatment History": '//*[@class="row align-top"]//span[14]//div//div[2]//textarea',
//             "Any special diet?": '//*[@class="row align-top"]//span[15]//div//div[2]//textarea',
//             "Details of Statement issued by Treating Doctor Visit findings": '//*[@class="row align-top"]//span[16]//div//div[2]//div//textarea'
//         }
//     },

//     TreatingDocterDocumentsPD: {
//         openMain: LOCATORS.StatementfromTreatingDoctor.clickOpen,
//         openSub: LOCATORS.StatementfromTreatingDoctor.clickDocumentsTDSTM,
//         fields: {
//             "Written Statement of Treating Doctor": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Medical Registration Copy": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "Consultation / Visiting hours - Document": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Diet Plan Document": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             },
//             "Doctor Attendence & Visit Register Photo": {
//                 dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//             },
//             "Audio / Video recording - Evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
//             }

//         }

//     },


//     StatementfromFamilyDoctor: {
//         openMain: LOCATORS.StatementfromFamilyDoctor.clickOpen,
//         openSub: LOCATORS.StatementfromFamilyDoctor.clickDocumentsFDSTM,
//         fields: {

//             "Whether Statement from Family Doctor available?": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//             }
//         }
//     },
//     FamilyDoctorDocumentsPD: {
//         openMain: LOCATORS.StatementfromFamilyDoctor.clickOpen,
//         openSub: LOCATORS.StatementfromFamilyDoctor.clickDocumentsFDSTM,
//         fields: {
//             "Written Statement of Treating Doctor - Audio / Video": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Written Statement of Treating Doctor - Document": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "Medical Registration Copy": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Consultation / Visiting hours - Document": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             },
//             "Diet Plan Document": {
//                 dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//             },
//             "Audio / Video recording - Evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
//             },
//             "Backdated Records": {
//                 dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
//             }
//         }
//     },


//     PathologyLabPathologistdetails: {
//         openMain: LOCATORS.PathologyLabPathologistDetails.clickOpen,
//         openSub: LOCATORS.PathologyLabPathologistDetails.clickPathologistDetails,
//         fields: {
//             "Pathology Center Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//             "Registration No_2": '//*[@class="row align-top"]//span[11]//div//div[2]//input',
//             "Address._2": [
//                 '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[6]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[8]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[14]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[16]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[17]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[18]//div//div[2]//input'
//             ],
//             "Pincode": [
//                 '//*[@class="row align-top"]//span[5]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[15]//div//div[2]//input'
//             ],

//             "Details of Statement issued by Pathologist Doctor Visit findings": [
//                 '//*[@class="row align-top"]//span[9]//div//div[2]//div//textarea',
//                 '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
//             ],
//             "Pathologist Doctor Name": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//             "Registered from Council": '//*[@class="row align-top"]//span[12]//div//div[2]//input',
//             "Pathology mannual register & Other findings": '//*[@class="row align-top"]//span[13]//div//div[2]//input',
//             "Who has signed the Pathology Report?": {
//                 dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[1]',
//             },
//             "Whether any delegation of authority agreement between Pathologist & Lab": {
//                 dropdown: '//*[@class="row align-top"]//span[20]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[20]//div//div[2]//select//option[1]',
//             },
//             "Lab Register Observations": '//*[@class="row align-top"]//span[21]//div//div[2]//div//textarea',
//             "Cross verification of Lab register and actual reports": '//*[@class="row align-top"]//span[22]//div//div[2]//div//textarea',
//             "Cell counter reading matching": '//*[@class="row align-top"]//span[23]//div//div[2]//div//textarea',
//             "Kit Test Verification": '//*[@class="row align-top"]//span[24]//div//div[2]//div//textarea',
//             "Lab is fully equipped with required instrument": '//*[@class="row align-top"]//span[25]//div//div[2]//div//textarea',
//             "All record up to the mark": '//*[@class="row align-top"]//span[26]//div//div[2]//div//textarea'
//         }
//     },
//     PathologistDocumentsPD: {
//         openMain: LOCATORS.PathologyLabPathologistDetails.clickOpen,
//         openSub: LOCATORS.PathologyLabPathologistDetails.clickPathologistDocument,
//         fields: {
//             "Lab Register Photo": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Discharge Summary": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "OPD & IPD Register Photos": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Lab Report": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             },
//             "Audio / Video recording - Evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//             }
//         }
//     },


//     VicinityVerification: {
//         openMain: LOCATORS.VicinityVerification.clickOpen,
//         openSub: LOCATORS.VicinityVerification.clickVicinityVerification,
//         fields: {

//             "Nearby Hospital Verification": '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
//             "Nearby Lab Verification": '//*[@class="row align-top"]//span[2]//div//div[2]//div//textarea',
//             "Nearby Pharmacy Verification": '//*[@class="row align-top"]//span[3]//div//div[2]//div//textarea',
//             "Neighbour / Relative Verification": '//*[@class="row align-top"]//span[4]//div//div[2]//div//textarea',
//             "Government Authority Verifiaction": '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea',
//             "Observation & Findings in detail": '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea'

//         }
//     },
//     VicinityVerificationDocumentsPD: {
//         openMain: LOCATORS.VicinityVerification.clickOpen,
//         openSub: LOCATORS.VicinityVerification.clickVicinityVerificationDocument,
//         fields: {
//             "Statement 1 - Audio / Video / Doc": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Statement 2 - Audio / Video / Doc": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "Statement 3 - Audio / Video / Doc": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Audio / Video Recording - Evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             }
//         }

//     },


//     PaymentReceiptsverifications: {
//         openMain: LOCATORS.PaymentReceiptsverifications.clickOpen,
//         openSub: LOCATORS.PaymentReceiptsverifications.clickPharmacyDetails,
//         fields: {
//             "Final bill of hospital": '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
//             "Cash receipts": '//*[@class="row align-top"]//span[2]//div//div[2]//div//textarea',
//             "Medicine Bill Verification": '//*[@class="row align-top"]//span[3]//div//div[2]//div//textarea',
//             "Pharmacy Name": '//*[@class="row align-top"]//span[4]//div//div[2]//input',
//             "Pharmacy Address complete": [
//                 '//*[@class="row align-top"]//span[5]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[7]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[9]//div//div[2]//input',
//             ],
//             "Licensee number": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//             "Stock Register Status": '//*[@class="row align-top"]//span[11]//div//div[2]//div//textarea',
//             "Bill Verification Findings": '//*[@class="row align-top"]//span[12]//div//div[2]//div//textarea',
//             "Additional Information & Remarks": '//*[@class="row align-top"]//span[13]//div//div[2]//div//textarea',
//             "Other Insurance Policy Details": '//*[@class="row align-top"]//span[14]//div//div[2]//input',
//             "Pharmacy Visit Findings": '//*[@class="row align-top"]//span[15]//div//div[2]//div//textarea'
//         }
//     },
//     PaymentDocumentsPD: {

//         openMain: LOCATORS.PaymentReceiptsverifications.clickOpen,
//         openSub: LOCATORS.PaymentReceiptsverifications.clickPaymentDocument,
//         fields: {

//             "Hospital Bills": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Cash Receipt": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "Pharmacy Bills": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Ambulance Bills": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             },
//             "Lab / Radiology Bills": {
//                 dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//             }
//         }

//     },




//     RadiologyCenter: {
//         openMain: LOCATORS.RadiologyCenter.clickOpen,
//         openSub: LOCATORS.RadiologyCenter.clickRadiologyCenter,
//         fields: {
//             "Radiology Center Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
//             "Registration number_2": '//*[@class="row align-top"]//span[2]//div//div[2]//input',
//             "Radiology Center Address.": [
//                 '//*[@class="row align-top"]//span[3]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[5]//div//div[2]//input',
//                 '//*[@class="row align-top"]//span[7]//div//div[2]//input'
//             ],
//             "Pincode": '//*[@class="row align-top"]//span[4]//div//input',
//             "Radiologist Doctor Name": '//*[@class="row align-top"]//span[9]//div//div[2]//input',
//             "Registration number_2": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
//             "Details of Statement issued by Radiologist / Visit findings": [
//                 '//*[@class="row align-top"]//span[8]//div//div[2]//textarea',
//                 '//*[@class="row align-top"]//span[18]//div//div[2]//div//textarea'
//             ],
//             "Registered from council": '//*[@class="row align-top"]//span[11]//div//input',
//             "Radiology mannual register & Other findings": '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
//             "Lab Register Observations": '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
//             "Who has signed the radiology Report?": {
//                 dropdown: '//*[@class="row align-top"]//span[14]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[14]//div//div[2]//select//option[3]',
//             },
//             "If Others, please specify": '//*[@class="row align-top"]//span[15]//div//input',
//             "Whether any delegation of authority agreement between Radiologist & Centre": {
//                 dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
//             },
//             "Cross verification of Lab register and actual reports": '//*[@class="row align-top"]//span[17]//div//div[2]//div//textarea'

//         }
//     },

//     RadiologyCenterDocumentsPD: {
//         openMain: LOCATORS.RadiologyCenter.clickOpen,
//         openSub: LOCATORS.RadiologyCenter.clickRadiologyCenterDocument,
//         fields: {

//             "Radiology Register Photo": {
//                 dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
//             },
//             "Discharge Summary": {
//                 dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
//             },
//             "OPD & IPD Register Photos": {
//                 dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
//             },
//             "Radiology Report": {
//                 dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
//             },
//             "Audio / Video recording - Evidence": {
//                 dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
//                 option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
//                 remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
//             }
//         }
//     },

//     QualityCheck: {
//         openMain: LOCATORS.QualityCheck.clickOpen,
//         openSub: LOCATORS.QualityCheck.clickQualityCheck,
//         fields: {
//             "Conclusion / recommendation": [
//                 '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea',
//                 '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea',
//                 '//*[@class="row align-top"]//span[9]//div//div[2]//div//textarea'
//             ]
//         }
//     }
// }







const { LOCATORS } = require('./locators');
module.exports = {
    PatientDemographics: {
        openMain: LOCATORS.PatientDemographics.clickOpen,
        openSub: LOCATORS.PatientDemographics.clickPatientDemographics,
        fields: {
            "Patient Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
            // "Patient DOB": '//*[@class="row align-top"]//span[5]//div//div[2]//input',
            "Residence Address": [
                '//*[@class="row align-top"]//span[11]//div//div[2]//input',
                '//*[@class="row align-top"]//span[13]//div//div[2]//input',
                '//*[@class="row align-top"]//span[15]//div//div[2]//input',
                '//*[@class="row align-top"]//span[16]//div//div[2]//input',
                '//*[@class="row align-top"]//span[17]//div//div[2]//input',
                '//*[@class="row align-top"]//span[18]//div//div[2]//input'
            ],
            "Residence Contact No": '//*[@class="row align-top"]//span[21]//div//div[2]//input',
            "Email Address of Patient/Insured": '//*[@class="row align-top"]//span[23]//div//div[2]//input',
            "Pincode": [
                '//*[@class="row align-top"]//span[12]//div//div[2]//input',
                '//*[@class="row align-top"]//span[20]//div//div[2]//input'
            ],
            "Landline Number": '//*[@class="row align-top"]//span[22]//div//div[2]//input',
            // ✅ Dropdowns
            "Patients Relation with Insured": {
                // dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
                // option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[8]' // "Other"
                dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[8]',
                remark: '//*[@class="row align-top"]//span[25]//div//div[2]//div//textarea'
            },
            "Patients Relation with Proposer": {
                // dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
                // option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[8]' // "Other"
                dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[8]',
                remark: '//*[@class="row align-top"]//span[27]//div//div[2]//div//textarea'
            },
            "Remarks": '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
        }
    },
    DemographicsDetails: {
        openMain: LOCATORS.PatientDemographics.clickOpen,
        openSub: LOCATORS.PatientDemographics.clickDemographicsDetails,
        fields: {
            "Distance between Residence and hospital (in kms)": [
                '//*[@class="row align-top"]//span[1]//div//div[2]//input',
                '//*[@class="row align-top"]//span[2]//div//div[2]//input',
                '//*[@class="row align-top"]//span[3]//div//div[2]//input',
                '//*[@class="row align-top"]//span[4]//div//div[2]//input'
            ],
            "Observation & Findings in detail": '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea'
        }
    },
    DocumentsPD: {
        openMain: LOCATORS.PatientDemographics.clickOpen,
        openSub: LOCATORS.PatientDemographics.clickDocumentsPD,
        fields: {

            "Patient Id": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Patient Photos": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "Medical Records": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Evidence": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            }
        }
    },

    StatementfromPatient: {
        openMain: LOCATORS.StatementfromPatient.clickOpen,
        openSub: LOCATORS.StatementfromPatient.ClickStatementfromPatient,
        fields: {
            "Presenting complains": '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
            "No. of days hospitalized": '//*[@class="row align-top"]//span[2]//div//div[2]//input',
            "Total cost of treatment": '//*[@class="row align-top"]//span[3]//div//div[2]//input',
            "Final bill of hospital": '//*[@class="row align-top"]//span[4]//div//div[2]//input',
            // "DOA" : '//*[@class="row align-top"]//span[7]//div//div[2]//input',
            // "DOD" : '//*[@class="row align-top"]//span[8]//div//div[2]//input',
            "Mode of Payment": {
                dropdown: '//*[@class="row align-top"]//span[5]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[5]//div//div[2]//select//option[9]'
            },
            "Any Discount offered / Requested on Final Hospital bill": '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea',
            "Treating Doctor Name": '//*[@class="row align-top"]//span[9]//div//div[2]//input',

            "Is the patient accompanied by someone at the time of Visit": {
                dropdown: '//*[@class="row align-top"]//span[11]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[11]//div//div[2]//select//option[2]'
            },
            "Any Specific diet followed / Advised": '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
            "Reason for admission under specified doctor / hospital": '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
            "Why Cashless Facilty is not availed?": '//*[@class="row align-top"]//span[14]//div//div[2]//textarea',

            "Do you have health policy with any other insurance": {
                dropdown: '//*[@class="row align-top"]//span[15]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[15]//div//div[2]//select//option[2]'
            },
            "Other insurance details if any": '//*[@class="row align-top"]//span[16]//div//div[2]//div//textarea',

            "Audio / Video recording done": {
                dropdown: '//*[@class="row align-top"]//span[17]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[17]//div//div[2]//select//option[1]'
            },
            "Any Previous Consultation?": {
                dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]'
            },
            "Remarks": '//*[@class="row align-top"]//span[20]//div//div[2]//div//textarea'
        }
    },
    StatementPatientDocumentsPD: {
        openMain: LOCATORS.StatementfromPatient.clickOpen,
        openSub: LOCATORS.StatementfromPatient.clickStatementPatientDocumentsPD,
        fields: {
            "Statement from Patient Audio / Video": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Statement from Patient - Document": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "Patient Photos": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Medical records from patient (Past & Present)": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            },
            "Prescriptions past and current": {
                dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
            },
            "Diet plan document": {
                dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
            },
            "Audio / Video recording - evidence": {
                dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
            }
        }
    },

    HospitalDetails: {
        openMain: LOCATORS.HospitalDetails.clickOpen,
        openSub: LOCATORS.HospitalDetails.clickHospitalDetails,
        fields: {
            "Hospital Cooperation": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[1]',
            },
            "Hospital Name.": '//*[@class="row align-top"]//span[3]//div//div[2]//input',
            "Registration No": '//*[@class="row align-top"]//span[4]//div//div[2]//input',
            "Address.": [
                '//*[@class="row align-top"]//span[6]//div//div[2]//input',
                '//*[@class="row align-top"]//span[8]//div//div[2]//input',
                '//*[@class="row align-top"]//span[10]//div//div[2]//input',
            ],
            "Pincode": '//*[@class="row align-top"]//span[7]//div//div[2]//input',
            "Total no of beds": '//*[@class="row align-top"]//span[11]//div//div[2]//input',
            "ICU & ICCU": {
                dropdown: '//*[@class="row align-top"]//span[12]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[12]//div//div[2]//select//option[1]',
            },
            "Other Findings / remarks": '//*[@class="row align-top"]//span[13]//div//div[2]//div//textarea',
            "No. of days hospitalized": '//*[@class="row align-top"]//span[14]//div//div[2]//input',
            "Total cost of treatment": '//*[@class="row align-top"]//span[15]//div//div[2]//input',
            "Final bill of hospital": '//*[@class="row align-top"]//span[16]//div//div[2]//input',
            "Any dues pending towards final bill amount / any discount offered on final bill": '//*[@class="row align-top"]//span[17]//div//div[2]//input',
            "Mode of Payment": {
                dropdown: '//*[@class="row align-top"]//span[18]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[18]//div//div[2]//select//option[1]',
            },
            "Treating Doctor Name": '//*[@class="row align-top"]//span[19]//div//div[2]//input',
            // "Qualification" : {
            //    dropdown : '//*[@class="row align-top"]//span[20]//div//div[2]//div//div',  // Dropdown open xpath
            //     option : '//*[@class="row align-top"]//span[20]//div//div[2]//div[3]//ul//li//span'  // Dropdown options xpath
            // },
            "Registration number": '//*[@class="row align-top"]//span[21]//div//div[2]//input',
            "Name of the Medical Certificate issuing Authority": '//*[@class="row align-top"]//span[23]//div//div[2]//input',
            "Whether the treating doctor is visiting doctor or Full time": {
                dropdown: '//*[@class="row align-top"]//span[24]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[24]//div//div[2]//select//option[2]',
            },
            "Is Indoor Case paper Collected?": {
                dropdown: '//*[@class="row align-top"]//span[26]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[26]//div//div[2]//select//option[1]',
            },
            "Audio / Video recording done": {
                dropdown: '//*[@class="row align-top"]//span[27]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[27]//div//div[2]//select//option[1]',
            },
            "Indoor Case Paper observation": '//*[@class="row align-top"]//span[28]//div//div[2]//div//textarea'
        }
    },
    HospitalDocumentsPD: {
        openMain: LOCATORS.HospitalDetails.clickOpen,
        openSub: LOCATORS.HospitalDetails.clickDocumentsHD,
        fields: {
            "IPD / OT Paper": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "OPD & IPD Register Photos": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "Lab Report": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Prescriptions past and current": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            },
            "Room Type Photo": {
                dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
            },
            "Infrastructure Photos": {
                dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
            },
            "Ambulance Record": {
                dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
            },
            "Pharmacy Records": {
                dropdown: '//*[@class="row align-top"]//span[22]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[22]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[24]//div//div[2]//textarea'
            },
            "Prescriptions past and current1": {
                dropdown: '//*[@class="row align-top"]//span[25]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[25]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[27]//div//div[2]//textarea'
            },
            "Diet Plan Document": {
                dropdown: '//*[@class="row align-top"]//span[28]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[28]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[30]//div//div[2]//textarea'
            },
            "Audio / Video recording - evidence": {
                dropdown: '//*[@class="row align-top"]//span[31]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[31]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[33]//div//div[2]//textarea'
            }
        }
    },

    StatementfromTreatingDoctor: {
        openMain: LOCATORS.StatementfromTreatingDoctor.clickOpen,
        openSub: LOCATORS.StatementfromTreatingDoctor.clickTreatingDoctorDetails,
        fields: {

            "Treating Doctor Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
            // "Qualification": {
            //     dropdown: '//*[@class="row align-top"]//span[2]//div//div[2]//div//div',
            //     option: '//*[@class="row align-top"]//span[2]//div//div[2]//div[3]//ul//li//span',
            //     // '//*[@class="row align-top"]//span[4]//div//div[2]//input'
            // },
            "Registration number": '//*[@class="row align-top"]//span[3]//div//div[2]//input',
            "Complain History": '//*[@class="row align-top"]//span[5]//div//div[2]//textarea',
            "Total cost of treatment": '//*[@class="row align-top"]//span[6]//div//div[2]//input',
            "Consultation / Visiting hours - in this hospital": '//*[@class="row align-top"]//span[9]//div//div[2]//div/textarea',
            "Number of Visits done to the patient": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
            "Verification of doctor attendence / Visit Register": '//*[@class="row align-top"]//span[11]//div//div[2]//div/textarea',
            "Diagnosis": '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
            "Reason for Admission": '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
            "Previous Medical / Surgical History / Treatment History": '//*[@class="row align-top"]//span[14]//div//div[2]//textarea',
            "Any special diet?": '//*[@class="row align-top"]//span[15]//div//div[2]//textarea',
            "Details of Statement issued by Treating Doctor Visit findings": '//*[@class="row align-top"]//span[16]//div//div[2]//div//textarea'
        }
    },

    TreatingDocterDocumentsPD: {
        openMain: LOCATORS.StatementfromTreatingDoctor.clickOpen,
        openSub: LOCATORS.StatementfromTreatingDoctor.clickDocumentsTDSTM,
        fields: {
            "Written Statement of Treating Doctor": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Medical Registration Copy": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "Consultation / Visiting hours - Document": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Diet Plan Document": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            },
            "Doctor Attendence & Visit Register Photo": {
                dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
            },
            "Audio / Video recording - Evidence": {
                dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
            }

        }

    },


    StatementfromFamilyDoctor: {
        openMain: LOCATORS.StatementfromFamilyDoctor.clickOpen,
        openSub: LOCATORS.StatementfromFamilyDoctor.clickFamilyDocterDetails,
        fields: {
            "Whether Statement from Family Doctor available?": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
            }
        }
    },
    FamilyDoctorDocumentsPD: {
        openMain: LOCATORS.StatementfromFamilyDoctor.clickOpen,
        openSub: LOCATORS.StatementfromFamilyDoctor.clickDocumentsFDSTM,
        fields: {
            "Written Statement of Treating Doctor - Audio / Video": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Written Statement of Treating Doctor - Document": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "Medical Registration Copy": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Consultation / Visiting hours - Document": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            },
            "Diet Plan Document": {
                dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
            },
            "Audio / Video recording - Evidence": {
                dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[18]//div//div[2]//textarea'
            },
            "Backdated Records": {
                dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[21]//div//div[2]//textarea'
            }
        }
    },


    PathologyLabPathologistdetails: {
        openMain: LOCATORS.PathologyLabPathologistDetails.clickOpen,
        openSub: LOCATORS.PathologyLabPathologistDetails.clickPathologistDetails,
        fields: {
            "Pathology Center Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
            "Registration No_2": '//*[@class="row align-top"]//span[11]//div//div[2]//input',
            "Address._2": [
                '//*[@class="row align-top"]//span[4]//div//div[2]//input',
                '//*[@class="row align-top"]//span[6]//div//div[2]//input',
                '//*[@class="row align-top"]//span[8]//div//div[2]//input',
                '//*[@class="row align-top"]//span[14]//div//div[2]//input',
                '//*[@class="row align-top"]//span[16]//div//div[2]//input',
                '//*[@class="row align-top"]//span[17]//div//div[2]//input',
                '//*[@class="row align-top"]//span[18]//div//div[2]//input'
            ],
            "Pincode": [
                '//*[@class="row align-top"]//span[5]//div//div[2]//input',
                '//*[@class="row align-top"]//span[15]//div//div[2]//input'
            ],
            "Other Findings / Remarks": '//*[@class="row align-top"]//span[9]//div//div[2]//div//textarea',
            "Pathologist Doctor Name": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
            "Registered from Council": '//*[@class="row align-top"]//span[12]//div//div[2]//input',
            "Pathology mannual register & Other findings": '//*[@class="row align-top"]//span[13]//div//div[2]//input',
            "Who has signed the Pathology Report?": {
                dropdown: '//*[@class="row align-top"]//span[19]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[19]//div//div[2]//select//option[1]',
            },
            "Whether any delegation of authority agreement between Pathologist & Lab": {
                dropdown: '//*[@class="row align-top"]//span[20]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[20]//div//div[2]//select//option[1]',
            },
            "Lab Register Observations": '//*[@class="row align-top"]//span[21]//div//div[2]//div//textarea',
            "Cross verification of Lab register and actual reports": '//*[@class="row align-top"]//span[22]//div//div[2]//div//textarea',
            "Cell counter reading matching": '//*[@class="row align-top"]//span[23]//div//div[2]//div//textarea',
            "Kit Test Verification": '//*[@class="row align-top"]//span[24]//div//div[2]//div//textarea',
            "Lab is fully equipped with required instrument": '//*[@class="row align-top"]//span[25]//div//div[2]//div//textarea',
            "All record up to the mark": '//*[@class="row align-top"]//span[26]//div//div[2]//div//textarea',
            "Details of Statement issued by Pathologist Doctor Visit findings": '//*[@class="row align-top"]//span[27]//div//div[2]//div//textarea'
        }
    },
    PathologistDocumentsPD: {
        openMain: LOCATORS.PathologyLabPathologistDetails.clickOpen,
        openSub: LOCATORS.PathologyLabPathologistDetails.clickPathologistDocument,
        fields: {
            "Lab Register Photo": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Discharge Summary": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "OPD & IPD Register Photos": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Lab Report": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            },
            "Audio / Video recording - Evidence": {
                dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
            }
        }
    },


    VicinityVerification: {
        openMain: LOCATORS.VicinityVerification.clickOpen,
        openSub: LOCATORS.VicinityVerification.clickVicinityVerification,
        fields: {

            "Nearby Hospital Verification": '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
            "Nearby Lab Verification": '//*[@class="row align-top"]//span[2]//div//div[2]//div//textarea',
            "Nearby Pharmacy Verification": '//*[@class="row align-top"]//span[3]//div//div[2]//div//textarea',
            "Neighbour / Relative Verification": '//*[@class="row align-top"]//span[4]//div//div[2]//div//textarea',
            "Government Authority Verifiaction": '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea',
            "Observation & Findings in detail": '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea'

        }
    },
    VicinityVerificationDocumentsPD: {
        openMain: LOCATORS.VicinityVerification.clickOpen,
        openSub: LOCATORS.VicinityVerification.clickVicinityVerificationDocument,
        fields: {
            "Statement 1 - Audio / Video / Doc": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Statement 2 - Audio / Video / Doc": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "Statement 3 - Audio / Video / Doc": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Audio / Video Recording - Evidence": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            }
        }

    },


    PaymentReceiptsverifications: {
        openMain: LOCATORS.PaymentReceiptsverifications.clickOpen,
        openSub: LOCATORS.PaymentReceiptsverifications.clickPharmacyDetails,
        fields: {
            "Final bill of hospital": '//*[@class="row align-top"]//span[1]//div//div[2]//div//textarea',
            "Cash receipts": '//*[@class="row align-top"]//span[2]//div//div[2]//div//textarea',
            "Medicine Bill Verification": '//*[@class="row align-top"]//span[3]//div//div[2]//div//textarea',
            "Pharmacy Name": '//*[@class="row align-top"]//span[4]//div//div[2]//input',
            "Pharmacy Address complete": [
                '//*[@class="row align-top"]//span[5]//div//div[2]//input',
                '//*[@class="row align-top"]//span[7]//div//div[2]//input',
                '//*[@class="row align-top"]//span[9]//div//div[2]//input',
            ],
            "Licensee number": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
            "Stock Register Status": '//*[@class="row align-top"]//span[11]//div//div[2]//div//textarea',
            "Bill Verification Findings": '//*[@class="row align-top"]//span[12]//div//div[2]//div//textarea',
            "Additional Information & Remarks": '//*[@class="row align-top"]//span[13]//div//div[2]//div//textarea',
            "Other Insurance Policy Details": '//*[@class="row align-top"]//span[14]//div//div[2]//input',
            "Pharmacy Visit Findings": '//*[@class="row align-top"]//span[15]//div//div[2]//div//textarea'
        }
    },
    PaymentDocumentsPD: {

        openMain: LOCATORS.PaymentReceiptsverifications.clickOpen,
        openSub: LOCATORS.PaymentReceiptsverifications.clickPaymentDocument,
        fields: {

            "Hospital Bills": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Cash Receipt": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "Pharmacy Bills": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Ambulance Bills": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            },
            "Lab / Radiology Bills": {
                dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
            }
        }

    },




    RadiologyCenter: {
        openMain: LOCATORS.RadiologyCenter.clickOpen,
        openSub: LOCATORS.RadiologyCenter.clickRadiologyCenter,
        fields: {
            "Radiology Center Name": '//*[@class="row align-top"]//span[1]//div//div[2]//input',
            "Registration number_2": '//*[@class="row align-top"]//span[2]//div//div[2]//input',
            "Radiology Center Address.": [
                '//*[@class="row align-top"]//span[3]//div//div[2]//input',
                '//*[@class="row align-top"]//span[5]//div//div[2]//input',
                '//*[@class="row align-top"]//span[7]//div//div[2]//input'
            ],
            "Pincode": '//*[@class="row align-top"]//span[4]//div//input',
            "Radiologist Doctor Name": '//*[@class="row align-top"]//span[9]//div//div[2]//input',
            "Registration number_2": '//*[@class="row align-top"]//span[10]//div//div[2]//input',
            "Details of Statement issued by Radiologist / Visit findings": [
                '//*[@class="row align-top"]//span[8]//div//div[2]//textarea',
                '//*[@class="row align-top"]//span[18]//div//div[2]//div//textarea'
            ],
            "Registered from council": '//*[@class="row align-top"]//span[11]//div//input',
            "Radiology mannual register & Other findings": '//*[@class="row align-top"]//span[12]//div//div[2]//textarea',
            "Lab Register Observations": '//*[@class="row align-top"]//span[13]//div//div[2]//textarea',
            "Who has signed the radiology Report?": {
                dropdown: '//*[@class="row align-top"]//span[14]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[14]//div//div[2]//select//option[3]',
            },
            "If Others, please specify": '//*[@class="row align-top"]//span[15]//div//input',
            "Whether any delegation of authority agreement between Radiologist & Centre": {
                dropdown: '//*[@class="row align-top"]//span[16]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[16]//div//div[2]//select//option[2]',
            },
            "Cross verification of Lab register and actual reports": '//*[@class="row align-top"]//span[17]//div//div[2]//div//textarea'

        }
    },

    RadiologyCenterDocumentsPD: {
        openMain: LOCATORS.RadiologyCenter.clickOpen,
        openSub: LOCATORS.RadiologyCenter.clickRadiologyCenterDocument,
        fields: {

            "Radiology Register Photo": {
                dropdown: '//*[@class="row align-top"]//span[1]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[1]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[3]//div//div[2]//textarea'
            },
            "Discharge Summary": {
                dropdown: '//*[@class="row align-top"]//span[4]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[4]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[6]//div//div[2]//textarea'
            },
            "OPD & IPD Register Photos": {
                dropdown: '//*[@class="row align-top"]//span[7]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[7]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[9]//div//div[2]//textarea'
            },
            "Radiology Report": {
                dropdown: '//*[@class="row align-top"]//span[10]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[10]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[12]//div//div[2]//textarea'
            },
            "Audio / Video recording - Evidence": {
                dropdown: '//*[@class="row align-top"]//span[13]//div//div[2]//select',
                option: '//*[@class="row align-top"]//span[13]//div//div[2]//select//option[2]',
                remark: '//*[@class="row align-top"]//span[15]//div//div[2]//textarea'
            }
        }
    },

    QualityCheck: {
        openMain: LOCATORS.QualityCheck.clickOpen,
        openSub: LOCATORS.QualityCheck.clickQualityCheck,
        fields: {
            "Conclusion / recommendation": [
                '//*[@class="row align-top"]//span[5]//div//div[2]//div//textarea',
                '//*[@class="row align-top"]//span[6]//div//div[2]//div//textarea',
                '//*[@class="row align-top"]//span[9]//div//div[2]//div//textarea'
            ]
        }
    }
}
