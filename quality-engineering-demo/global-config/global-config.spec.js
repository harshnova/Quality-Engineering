const global_config_data = JSON.parse(require("fs").readFileSync("global-config/.global-config-data.json", 'utf8'));
module.exports=global_config_data