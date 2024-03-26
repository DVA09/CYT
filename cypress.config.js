const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f11gqz',
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    // To display small circular charts regarding test results
    charts: true,
    // Generate JSON file to create custom reports
    json: true,
    // Customize the report file name
    reportFilename: 'my-report',
    // Generate new report file or overwrite the a single file
    overwrite: false
  }  
});
