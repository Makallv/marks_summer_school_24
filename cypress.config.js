const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'test@tdl.com',
    password: 'bfyj8VP5WYMgd8s',
  },

  address: {
    first_name: 'FirstName',
    last_name: 'LastName',
    address: 'Riga street',
    city: 'Sigulda',
    postal_code: 'LV-2150',
    country: 'Latvia'
  },

  addressInputFields: {
    first_name: 'first-name-input',
    last_name: 'last-name-input',
    address: 'address-1-input',
    city: 'city-input',
    postal_code: 'postal-code-input',
    country: 'country-select'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://coe-webstore.tdlbox.com/us/sign-in",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
  },
});
