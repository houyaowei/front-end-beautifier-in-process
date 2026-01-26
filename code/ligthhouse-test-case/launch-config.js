import fs from "fs";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import cConfig from "./custom-config.js";

function launchChromeAndRunLighthouse(url, flags = {}, config = null) {
  return chromeLauncher.launch(flags).then((chrome) => {
    console.log(cConfig);
    const lh_flags = {
      logLevel: "info",
      output: "html",
      port: chrome.port,
    };
    return lighthouse(url, lh_flags, cConfig).then((results) => {
      chrome.kill();
      return results;
    });
  });
}

const flags = {
  chromeFlags: ["--headless"],
};

launchChromeAndRunLighthouse("https://www.aliyun.com/", flags).then(
  (results) => {
    const _report = results.report;
    fs.writeFileSync("report2.html", _report);
  },
);
