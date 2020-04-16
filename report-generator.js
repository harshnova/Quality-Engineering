//importing dependencies
const path = require('path');
const exec = require("child_process").exec
const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const os = require("os"); 
const [,,... args] = process.argv;

//defining global constants and variables
const setup = require('./.setup');
const _this = new setup();
const osvar = os.type().toLowerCase();

const reportType = args[0];

//ui tests report
if(reportType=="ui"||reportType=="all"){
    const report_config_path = ".reportconfig.json"; 
    const reportConfig = JSON.parse(fs.readFileSync(report_config_path, 'utf8'));
    report.generate(reportConfig);
}

//performance tests report
//TODO: later remove this hack and find a stable approach
if(reportType=="performance"||reportType=="all"){
    const performance_report_output_folder = _this.performance_report_output_folder;
    const performance_report_path = path.join(performance_report_output_folder, getLatestFile(performance_report_output_folder));
    if (osvar == 'darwin') {
        //macos
        const command = "open " + performance_report_path
        exec(command, (error, stdout, stderr) => {});
    }else if(osvar == 'win32'){
        //windows
        const command = "start " + performance_report_path
        exec(command, (error, stdout, stderr) => {});
    }else{
        try{
            const command = "xdg-open " + performance_report_path
            exec(command, (error, stdout, stderr) => {});
        }catch(err){
            console.log("xdg-open not available. please install it.")
        }
    }
}

//method to get the latest file in a given folder
//TODO: later remove this hack and find the report by name
function getLatestFile(dirpath) {
    let latest;
    const files = fs.readdirSync(dirpath);
    files.forEach(filename => {
      const stat = fs.lstatSync(path.join(dirpath, filename));
      if (stat.isDirectory())
        return;
      if (!latest) {
        latest = {filename, mtime: stat.mtime};
        return;
      }
      if (stat.mtime > latest.mtime) {
        latest.filename = filename;
        latest.mtime = stat.mtime;
      }
    });  
    return latest.filename;
  }

  