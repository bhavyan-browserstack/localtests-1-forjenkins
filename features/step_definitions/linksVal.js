const { Given, When, Then , After } = require('@cucumber/cucumber');
const linkFunc= require('../pages/linkFuncs.js');

Given('I open the Automation Practice page for links', async () => {
  const theURL= 'https://ultimateqa.com/automation/';
  await linkFunc.goToURL(theURL);
});

// Click the link with the given href
When('I find and click the link with href {string}', async (hrefValue) => {
  const xPaath = `//a[@href='${hrefValue}']`;
  console.log(` generated path ${xPaath}`)
  
  await linkFunc.checkVisible(xPaath);
  await linkFunc.clickLink(xPaath);
});

// Verify the redirected page URL
Then('I should be redirected to the page with URL containing {string}', async (expectedURL) => {
  const currentURL = await linkFunc.getPresentURL();
  await linkFunc.ValidateURL(expectedURL, currentURL);

  const currentURL2 = await linkFunc.getPresentURL();
  console.log(`headed back to ${currentURL2}`);
});

// After(async () => {
//   await linkFunc.captureConsoleEvents();
// });

