//importing packages
const exec = require("child_process").exec
const path = require("path");
const chalk = require("chalk");

//declaring global constants and variables
const setup = require('../.setup');
const _this = new setup();
const baseUrl = _this.performanceBaseUrl;
const flargs = require('yargs').argv;
if(flargs.url){
    baseUrl = flargs.url;
}
const performance_report_output_folder = _this.performance_report_output_folder;
const performance_report_base_name = _this.performance_report_base_name;
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
const nowDateTime = date+'-'+time;
var report_path = path.join(performance_report_output_folder, performance_report_base_name+"-"+nowDateTime+".html");
var command = "lighthouse "+baseUrl+" --output html --output-path " + report_path;

//executing the test
exec(command, (error, stdout, stderr) => {});
console.log(chalk.blue("-------------------------------------------------------------------------"));
console.log(chalk.blue.bold("You can find report of this performance test in:"));
console.log(chalk.blue(report_path));
console.log(chalk.blue("-------------------------------------------------------------------------"));
