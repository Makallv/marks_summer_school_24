const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
  },
  env: {
    username: "test@tdl.com",
    password: "",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://coe-webstore.tdlbox.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    trashAssetsBeforeRuns: true,
  },
});
