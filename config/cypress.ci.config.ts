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
    // Optional Cucumber tag filter from the TAGS env variable (set by the workflow's manual run).
    // Read here instead of in the npm script, so the command works in any shell, including Windows cmd
    ...(process.env.TAGS ? { expose: { tags: process.env.TAGS } } : {}),
  },
});
