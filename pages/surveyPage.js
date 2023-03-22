const { element, by, browser } = require('protractor')


function surveyPage(){
    this.txtbox_FirstName = element.all(by.css('[class="form-control textbox-tcc"')).get(0);
    this.txtbox_LastName = element.all(by.css('[class="form-control textbox-tcc"')).get(1);
    this.txtbox_email   =element.all(by.css('[class="form-control textbox-tcc"')).get(2);
    this.txtbox_StreetAddress   =element.all(by.css('[class="form-control textbox-tcc"')).get(3);
    this.txtbox_City   =element.all(by.css('[class="form-control textbox-tcc"')).get(4);
    this.txtbox_ZipCode   =element.all(by.css('[class="form-control textbox-tcc"')).get(5);
    this.button_Next     = element(by.css('[class="buttonStyle"]'));
       
    this.optionSnap_No = element.all(by.xpath('//div[@id="SurveyControl_Question11396"]')).get(0);
    this.optionTanf_No = element.all(by.xpath('//label[@class="btn btn-default btn-lg btn-tcc"]')).get(2);
    this.optionMilitary_No = element.all(by.xpath('//div[@id="SurveyControl_Question914"]')).get(0);
    this.optionDisability_No = element.all(by.xpath('//div[@id="SurveyControl_Question11361"]')).get(0);
    this.optionFelony_No = element.all(by.xpath('//div[@id="SurveyControl_Question915"]')).get(0);
    this.optionUnemployed_No = element.all(by.xpath('//label[@class="btn btn-default btn-lg btn-tcc"]')).get(6);
    this.addinform = element(by.xpath('//div[@id= "jurat"]'));
    this.button_Submit = element(by.xpath('//input[@type="submit"]'))
       

    this.enterUserInformation = function (value) {
       
            this.txtbox_FirstName.sendKeys(value.firstname);
            this.txtbox_LastName.sendKeys(value.lastname);
            this.txtbox_email.sendKeys(value.email);
            this.txtbox_StreetAddress.sendKeys(value.streetAddress);
            this.txtbox_City.sendKeys(value.city);
            this.txtbox_ZipCode.sendKeys(value.zipcode);
            this.button_Next.click();
            browser.sleep(2000);
            this.optionSnap_No.click();
            this.optionTanf_No.click();
            this.optionMilitary_No.click();
            this.optionDisability_No.click();
            this.optionFelony_No.click();
            this.scrollDown();
            expect(this.addinform.getText()).toContain("Additional Information");
            this.button_Submit.click();
           
            
            

}

this.scrollDown = function(){

    browser.executeScript('window.scrollTo(0,10000)');
    this.optionUnemployed_No.click();
    browser.sleep(3000);
    this.button_Next.click();
    
    
        
}

this.verifyPageTitle = function(){

    expect(browser.getTitle()).toContain('Tax Credit Survey');

}

 this.verifyUrl = function(){

    expect(browser.getCurrentUrl()).toContain('www.experian.com/employer-services/');

}

}
module.exports = new surveyPage();