
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
 * check title of the page
  @param {string} title
  */
  async checkTitle(title){
    await browser.expect.title().to.equal(title);  
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
        console.log(`Log Type: ${log.level}, Timestamp: ${log.timestamp}`);
        console.log('Log Message:', JSON.stringify(message, null, 2));  // Pretty-print the object 

    });
  }
  
}

module.exports = new linkFunc();
