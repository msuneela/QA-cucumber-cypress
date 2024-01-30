Installing and running the Project
After cloning the repo on your machine, open a terminal, CD into the project's root folder and run below
To run the tests cypress.env.json file is required. 
cypress.env.json file should be placed under root folder
I will send this file in email

$ npm install # Installs test dependencies

$ npm run test # Run tests in headless browser, Cypress default runner/browser
$ npm run regression #Runs tests in headless with tag as @REGRESSION

Running tests with Cypress Runner window - Tests will run in selectinve browser and are visible
$ npm run debug
$ npm run regression:open # opens browser and runs test with tag as @REGRESSION


