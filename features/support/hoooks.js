const { BeforeAll, AfterAll } = require('@cucumber/cucumber');


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
