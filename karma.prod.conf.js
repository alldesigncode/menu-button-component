var karmConf = require("./karma.conf");

module.exports = function (config) {
  karmConf(config);
  config.autoWatch = false;
  config.singleRun = true; // do not block jenkins, run it only once
  config.browsers = ["ChromeHeadlessNoSandbox"]; // only 'ChromeHeadless' is not working for jenkins build, use --no-sandbox flag
  config.customLaunchers = {
    ChromeHeadlessNoSandbox: {
      base: "ChromeHeadless",
      flags: ["--no-sandbox"],
    },
  };
};
