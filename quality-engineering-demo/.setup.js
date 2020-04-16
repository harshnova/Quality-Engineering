/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable global-require */

const _ = require('lodash');
const config = require('./global-config/global-config.spec.js');
const pino = require('pino');

const log = pino({
  prettyPrint: {
    levelFirst: true,
    colorize: true,
    translateTime: true,
    ignore: 'pid,hostname'
  },
  prettifier: require('pino-pretty')
});

class setup {
  constructor() {
    this.uiBaseUrl = config.uiBaseUrl;
    this.performanceBaseUrl = config.performanceBaseUrl;
    this.performance_report_output_folder = config.performance_report_output_folder;
    this.performance_report_base_name = config.performance_report_base_name;
    this.uitests = config.uitests;
    this.username = config.username;
    this.email = config.email;
    this.message = config.message;
    this.fuzzy_keyword = config.fuzzy_keyword;
    this.uitests_fixture = config.uitests_fixture;
    this.config = config;
    this.log = log;
  }
}

module.exports = setup;
