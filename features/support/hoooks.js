const { BeforeAll, AfterAll ,After} = require('@cucumber/cucumber');
const linkFunc= require('../pages/linkFuncs.js');



BeforeAll(async () => {
  try {
    console.log("Before all scenarios - Initializing the browser");
  
  } catch (error) {
    console.error("Error during BeforeAll:", error);  // Log the error if initialization fails
    throw error;  // Rethrow the error so the process exits
  }
});

AfterAll(async () => {

  try {
    console.log("After all scenarios - Closing the browser");
     // Quit the browser after all tests are done
  } catch (error) {
    console.error("Error during AfterAll:", error);  // Log the error if quitting fails
    throw error;  // Rethrow the error so the process exits
  }
});

After(async (scenario) => {
  try {
    console.log("Capturing console logs for scenario:", scenario.pickle.name);
    const logTypes = await browser.getLogTypes();
    console.log('Available Log Types:', logTypes);
    // Capture console logs and output errors
    await linkFunc.captureConsoleEvents();

  } catch (error) {
    console.error("Error capturing console logs:", error);
    throw error;  // Rethrow the error to indicate test failure if needed
  }
});