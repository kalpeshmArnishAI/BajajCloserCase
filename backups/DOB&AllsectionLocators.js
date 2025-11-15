const LOCATORS = {
    login: {
      username: '//*[@class="ssd_floating-form"]//div//input[@type="text"]',
      password: '//*[@class="ssd_floating-form"]//div//input[@type="password"]',
      submit: "input[type='submit']",
    },
    logout: {
      usercard: '//div//*[@class="flaticon-profile-user pr-3"]',
      logoutbtn: '//div//ul//*[@class="profile-dropdown"]//a//div[3]//a'
    },
    searchbar: {
      searchicon: '//div//*[@id="navbarSupportedContent"]//ul//li//a//i',
      searchInput: '//*[@id="navbarSupportedContent"]//ul//li//*[@class="search-popup__form"]//input',
      searchbtn: '//*[@id="navbarSupportedContent"]//ul//li//*[@class="search-popup__form"]//button//i'
    },
    CaseIDClick: '//div[@class="custom-table"]//div/div//div[@class="vuetable-body-wrapper"]//table//tbody//tr//td',
    GenerateReportClick: '//div[@class="policy-forms"]//div//div//button[3]',
  
    PatientDemographics: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[2]//div//span[2]//i',
      clickPatientDemographics: '//div[@id="policy-list-sidebar"]/div[2]//div//div[2]//ul//li//a',
      clickDemographicsDetails: '//div[@id="policy-list-sidebar"]/div[2]//div//div[2]//ul//li[2]//a',
      clickDocumentsPD: '//div[@id="policy-list-sidebar"]/div[2]//div//div[2]//ul//li[3]//a'
    },
  
    saveForlaterbtn: '//*[@class="fixed-bottom-buttons"]//button[3]',
    nextBtn: '//*[@class="fixed-bottom-buttons"]//button[2]',
    confirmYesBtn: '//*[@class="modal-content"]//div//div//div//div//ul//li[1]//a',
  
    StatementfromPatient: { 
      clickOpen: '//div[@id="policy-list-sidebar"]/div[3]//div//span[2]//i',
      ClickStatementfromPatient: '//div[@id="policy-list-sidebar"]/div[3]//div//div[2]//ul//li//a',
      clickStatementPatientDocumentsPD: '//div[@id="policy-list-sidebar"]/div[3]//div//div[2]//ul//li[2]//a'
    },
  
    HospitalDetails: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[4]//div//span[2]//i',
      clickHospitalDetails: '//div[@id="policy-list-sidebar"]/div[4]//div//div[2]//ul//li[1]//a',
      clickDocumentsHD: '//div[@id="policy-list-sidebar"]/div[4]//div//div[2]//ul//li[2]//a',
    },
  
    StatementfromTreatingDoctor: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[5]//div//span[2]//i',
      clickTreatingDoctorDetails: '//div[@id="policy-list-sidebar"]/div[5]//div//div[2]//ul//li[1]//a',
      clickDocumentsTDSTM : '//div[@id="policy-list-sidebar"]/div[5]//div//div[2]//ul//li[2]//a'
    },

    StatementfromFamilyDoctor:{
      clickOpen: '//div[@id="policy-list-sidebar"]/div[6]//div//span[2]//i',
      clickFamilyDocterDetails: '//div[@id="policy-list-sidebar"]/div[6]//div//div[2]//ul//li[1]//a',
      clickDocumentsFDSTM : '//div[@id="policy-list-sidebar"]/div[6]//div//div[2]//ul//li[2]//a'
    },
  
    PathologyLabPathologistDetails: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[7]//div//span[2]//i',
      clickPathologistDetails: '//div[@id="policy-list-sidebar"]/div[7]//div//div[2]//ul//li[1]//a',
      clickPathologistDocument : '//div[@id="policy-list-sidebar"]/div[7]//div//div[2]//ul//li[2]//a'
    },
   VicinityVerification :{
    clickOpen: '//div[@id="policy-list-sidebar"]/div[8]//div//span[2]//i',
    clickVicinityVerification: '//div[@id="policy-list-sidebar"]/div[8]//div//div[2]//ul//li[1]//a',
    clickVicinityVerificationDocument : '//div[@id="policy-list-sidebar"]/div[8]//div//div[2]//ul//li[2]//a'
   },

    PaymentReceiptsverifications: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[9]//div//span[2]//i',
      clickPharmacyDetails: '//div[@id="policy-list-sidebar"]/div[9]//div//div[2]//ul//li[1]//a',
      clickPaymentDocument : '//div[@id="policy-list-sidebar"]/div[9]//div//div[2]//ul//li[2]//a'
    },
  
    RadiologyCenter: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[10]//div//span[2]//i',
      clickRadiologyCenter: '//div[@id="policy-list-sidebar"]/div[10]//div//div[2]//ul//li[1]//a',
      clickRadiologyCenterDocument : '//div[@id="policy-list-sidebar"]/div[10]//div//div[2]//ul//li[2]//a'
    },
  
    QualityCheck: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[11]//div//span[2]//i',
      clickQualityCheck: '//div[@id="policy-list-sidebar"]/div[11]//div//div[2]//ul//li[1]//a',
    },
    Trigger: {
      clickOpen: '//div[@id="policy-list-sidebar"]/div[12]//div//span[2]//i',
      clickTrigger: '//div[@id="policy-list-sidebar"]/div[12]//div//div[2]//ul//li[1]//a',
    },
  };
module.exports = { LOCATORS };
  