const surveyPage = require('../pages/surveyPage.js');
const value = require('../testData/testdata.json');
const url="https://surveyrc.taxcreditco.com/automation-challenge/";
const { browser } = require('protractor');

describe('Verify user is able to login the page ', function () {
    it('Launch the application',function () {
        browser.get(url);
        surveyPage.verifyPageTitle();
        
    });

    it('Enter the user details and verify the homepage' ,function() {
        surveyPage.enterUserInformation(value.users[0]);
        surveyPage.verifyUrl();

    

    });

   
});