import fs from "fs";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

function launchChromeAndRunLighthouse(url, flags = {}, config = null) {
  return chromeLauncher.launch(flags).then((chrome) => {
    // flags.port = chrome.port;
    const lh_flags = {
      logLevel: "info",
      output: "html",
      port: chrome.port,
      // onlyCategories: ["performance"],
    };
    return lighthouse(url, lh_flags).then((results) => {
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
    fs.writeFileSync("report.html", _report);
  },
);
