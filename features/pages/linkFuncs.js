
// class linkFunc{

//   async goToURL(theURL){
//     await browser.url(`${theURL}`);

//   }
//     /**
//    * Wait for an element to be visible
//    * @param {string} xPaath - The XPath of the element
//    */
//   async checkVisible(xPaath){
//     await browser.useXpath().waitForElementVisible(xPaath, 10000);
//   }
//   async clickLink(xPaath){
//     await browser.useXpath().click(xPaath);
//     await browser.pause(3000); 
//   }
//  async getPresentURL(){
//   console.log(`Clicking link with href: ${hrefValue}`);
//   const currentURL = await browser.getCurrentUrl();
//  }
//  async ValidateURL(){
//   console.log(`Current URL after click: ${currentURL}`);
//   browser.expect(currentURL).to.contain(expectedURL);
//   await browser.back();
//   await browser.pause(3000); 
//  }

// }

// module.exports = new linkFunc();

class linkFunc {
  /**
   * Navigate to a specific URL
   * @param {string} theURL - The URL to navigate to
   */
  async goToURL(theURL) {
    await browser.url(theURL);
  }

  /**
   * Wait for an element to be visible
   * @param {string} xPaath - The XPath of the element
   */
  async checkVisible(xPaath) {
    await browser.useXpath().waitForElementVisible(xPaath, 10000);
  }

  /**
   * Click on a link
   * @param {string} xPaath - The XPath of the element
   */
  async clickLink(xPaath) {
    console.log(`Clicking link with XPath: ${xPaath}`);
    await browser.useXpath().click(xPaath);
    await browser.pause(3000); // Allow time for navigation
  }

  /**
   * Get the current URL of the browser
   * @returns {string} - The current URL
   */
  async getPresentURL() {
    const currentURL = await browser.getCurrentUrl();
    return currentURL;
  }

  /**
   * Validate if the current URL matches the expected pattern
   * @param {string} expectedURL - The expected URL pattern
   * @param {string} currentURL - The current URL
   */
  async ValidateURL(expectedURL, currentURL) {
    console.log(`Validating: ${currentURL} contains ${expectedURL}`);
    browser.expect(currentURL).to.contain(expectedURL);

    // Go back to the previous page
    await browser.back();
    await browser.pause(3000); // Wait for the page to load
  }
  async captureConsoleEvents() {
    const logs = await browser.getLog('browser');  // Capture browser logs
    logs.forEach(log => {
      const message = log.message;
      // If the message is an object, try to log specific properties
        console.log(`Log Type: ${log.level}, Timestamp: ${log.timestamp}`);
        console.log('Log Message:', JSON.stringify(message, null, 2));  // Pretty-print the object 

    });
  }
  
}

module.exports = new linkFunc();
