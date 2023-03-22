var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
//var HtmlReporter =require('protractor-beautiful-reporter');

exports.config = {
  directConnect: true,
  
    getPageTimeout: 100000,
    allScriptsTimeout: 300000,
    capabilities: {
    shardTestFiles: true,
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    chromeOptions: {
    excludeSwitches: ['enable-logging']
      }
 
  
  },
  framework: 'jasmine',

    specs: ['./test/testfile_spec.js'],
    
  
    onPrepare: function(){
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
    
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: './testresults',
            
          }));
        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: 'raw'
          },
          summary: {
            displayDuration: false
          }
        }));
    
      },
    
      jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 2500000
      }
    }

  
