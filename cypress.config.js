const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // -- node
    },
    baseUrl: "https://apex.oracle.com/pls/apex/r/rodrigorosa/qa-application",
  },
});
