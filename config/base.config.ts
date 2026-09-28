import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

// Settings shared by all environments; each config file extends this one
export const baseConfig = defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    specPattern: "cypress/e2e/**/*.feature",
    viewportWidth: 1440,
    viewportHeight: 900,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },
  },
});
