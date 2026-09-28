import { defineConfig } from "cypress";
import { baseConfig } from "./base.config";

// CI (GitHub Actions): retries against third-party flakiness, longer timeouts, video for debugging
export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    retries: { runMode: 2, openMode: 0 },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 90000,
    video: true,
    screenshotOnRunFailure: true,
  },
});
