//this scripts makes all the configurations
//covered configurations: reports, headless browser

const flargs = require('yargs').argv;
const crypto = require('crypto');
var path = require('path');
const editJsonFile = require("edit-json-file");
const rcfile = editJsonFile(`.testcaferc.json`); //TODO: take this from global config
const reportConfigFile = editJsonFile(`.reportconfig.json`); //TODO: take this from global config
const reportBasePath = "test-results/reports/ui-tests/"; //TODO: take this from global config

var testName = crypto.randomBytes(8).toString('hex');
//TODO: set a configuration flag for browser, set default and pick from global config
if(flargs.uitestname){
  testName = flargs.uitestname;
}

//setting path for saving reports
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
const nowDateTime = date+'-'+time;
const reportFileName = testName+"-"+nowDateTime+"-report.json";
const reportFolder = testName+"-"+nowDateTime
const reportFilePath = path.join(reportBasePath, reportFolder, reportFileName);
var reporter = [
  {
    "name": "spec"
  },
  {
    "name": "cucumber-json",
    "output": reportFilePath
  }
]
rcfile.set("reporter", reporter);
rcfile.save();
reportConfigFile.set("reportName", testName);
var reportConfigData = [
  { "label": "Project", "value": reportFileName},
  { "label": "Release", "value": "1.0.0"},
  { "label": nowDateTime}
]
reportConfigFile.set("customData.data", reportConfigData);
reportConfigFile.set("jsonDir", path.join(reportBasePath, reportFolder));
reportConfigFile.set("reportPath", path.join(reportBasePath, reportFolder));
reportConfigFile.save();
sleep(2000);

function sleep(ms) {
  var start = new Date().getTime(), expire = start + ms;
  while (new Date().getTime() < expire) { }
  return;
}
