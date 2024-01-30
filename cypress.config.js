const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}


module.exports = defineConfig ({
  
 
  e2e: {
    setupNodeEvents(on, config){
			addCucumberPreprocessorPlugin(on, config);
			on("file:preprocessor",createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
			)
		},
    specPattern: "cypress/e2e/bdd-cucumber/features/*.feature",
    watchForFileChanges:false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    setupNodeEvents
  },
 
});