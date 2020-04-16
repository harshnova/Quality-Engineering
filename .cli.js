#!/usr/bin/env node

const flargs = require('yargs').argv;
const editJsonFile = require("edit-json-file");
const global_config_data_file = editJsonFile("global-config/.global-config-data.json");
const rcfile = editJsonFile(".testcaferc.json");
//defaults
//TODO: set defaults in global config and import from there
var browser = "chrome";
var headless = "no";
var performanceTestPage = "https://www.mantralabsglobal.com";
//TODO: set a configuration flag for browser, set default and pick from global config
if(flargs.uibrowser){
  //possible values = off, always, bug
  if(flargs.uibrowser=="chrome" || flargs.uibrowser=="safari" || flargs.uibrowser=="firefox"){
    browser = flargs.uibrowser;
  }
}
if(flargs.uiheadless){
  //possible values = yes, no
  if(flargs.uiheadless == "yes" || flargs.uiheadless == "no"){
    headless = flargs.uiheadless;
    }
}
if(flargs.ptUrl){
    performanceTestPage = flargs.ptUrl;
    global_config_data_file.set("performanceBaseUrl", performanceTestPage);
    global_config_data_file.save();
}
if(flargs.reset){
    if(flargs.reset=="default"){
        rcfile.set("browser","chrome");
        rcfile.save();
        global_config_data_file.set("performanceBaseUrl", "https://www.mantralabsglobal.com");
        global_config_data_file.save();
    }
}
console.log("browser, ", browser);
console.log("headless, ", headless);
if(browser=="chrome" && headless=="no"){
    rcfile.set("browsers","chrome");
    rcfile.save();
}
if(browser=="chrome" && headless=="yes"){
    rcfile.set("browsers","chrome:headless");
    rcfile.save();
}
if(browser=="safari" && headless=="no"){
    rcfile.set("browsers","safari");
    rcfile.save();
}
if(browser=="safari" && headless=="yes"){
    rcfile.set("browsers","safari:headless");
    rcfile.save();
}
if(browser=="firefox" && headless=="no"){
    rcfile.set("browsers","firefox");
    rcfile.save();
}
if(browser=="firefox" && headless=="yes"){
    rcfile.set("browsers","firefox:headless");
    rcfile.save();
}

