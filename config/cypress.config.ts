import { defineConfig } from "cypress";
import { baseConfig } from "./base.config";

// Local development: no retries, so flaky tests are visible right away
export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    retries: 0,
    video: false,
  },
});
