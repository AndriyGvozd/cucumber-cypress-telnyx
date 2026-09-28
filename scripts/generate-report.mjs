import fs from "node:fs";
import os from "node:os";
import { generate } from "multiple-cucumber-html-reporter";

const jsonDir = "reports";
const reportPath = "reports/html";
const cypressVersion = JSON.parse(fs.readFileSync("node_modules/cypress/package.json", "utf8")).version;

if (!fs.existsSync(`${jsonDir}/cucumber.json`)) {
  console.error(`No ${jsonDir}/cucumber.json found. Run the tests first.`);
  process.exit(1);
}

generate({
  jsonDir,
  reportPath,
  reportName: "Telnyx - Cypress + Cucumber",
  pageTitle: "Telnyx test report",
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: { name: "electron" },
    device: process.env.CI ? "GitHub Actions" : os.hostname(),
    platform: { name: os.platform(), version: os.release() },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Site", value: "https://telnyx.com" },
      { label: "Cypress", value: cypressVersion },
      { label: "Environment", value: process.env.CI ? "CI" : "Local" },
      { label: "Generated", value: new Date().toISOString() },
    ],
  },
});
