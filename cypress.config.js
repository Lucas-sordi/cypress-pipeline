const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      hideXHR: true
    },
    baseUrl: "https://www.saucedemo.com",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "reports",
      html: false,
      json: true,
      overwrite: false
    },
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.js",
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    requestTimeout: 10000,
    setupNodeEvents(on, config) {
      const isCI = process.env.CI === 'true';

      if (!isCI) {
        const environment = config.env.ENV || 'test';
        const envFilePath = `./cypress.${environment}.env.json`;
        const settings = require(envFilePath);

        if (settings) {
          config.env = {
            ...config.env,
            ...settings,
          };
        }
      }

      return config;
    }
  }
});