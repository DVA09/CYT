const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f11gqz',
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/grep/src/plugin")(config);
       config.env.grepOmitFiltered = true;
       config.env.grepFilterSpecs = true;
       config.env.grepTags = process.env.GREP_TAGS;
       return config;
    },
  },
});
