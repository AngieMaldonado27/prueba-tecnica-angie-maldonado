const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  'cypress-cucumber-preprocessor': {
    nonGlobalStepDefinitions: false,
    step_definitions: './cypress/e2e/PruebaQA/Tests/',
    },
  e2e: {
    specPattern:["cypress/e2e/PruebaQA/**/*.feature"],
    //baseUrl:"https://reqres.in/api",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  }
 
});
