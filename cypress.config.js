const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: 'f11gqz',
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },  
});
