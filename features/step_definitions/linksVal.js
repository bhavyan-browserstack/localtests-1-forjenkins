const { Given, When, Then , After } = require('@cucumber/cucumber');
const linkFunc= require('../pages/linkFuncs.js');
const locatorsPage = require('/Users/bhavyananda/Desktop/Initial scripts/ass-1-v2/features/locators/locators.js');

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
  // dummy error
});

After(async () => {
  await linkFunc.captureConsoleEvents();
});

/*
 const { Given, When, Then } = require('@cucumber/cucumber');
const linkFunc = require('../pages/linkFuncs.js'); // Correct relative path

Given('I open the Automation Practice page for links', async () => {
  const theURL = 'https://ultimateqa.com/automation/';
  await linkFunc.goToURL(theURL);
});

When('I find and click the link with href {string}', async (hrefValue) => {
  const xPaath = `//a[@href='${hrefValue}']`;
  console.log(`Generated XPath: ${xPaath}`);

  await linkFunc.checkVisible(xPaath);
  await linkFunc.clickLink(xPaath);
});

Then('I should be redirected to the page with URL containing {string}', async (expectedURL) => {
  const currentURL = await linkFunc.getPresentURL();
  await linkFunc.ValidateURL(expectedURL, currentURL);
});
*/


//js errros logging
// DOUBT!!

// Then('I fetch the browser console logs', async()=>{
//   await browser.captureConsoleLogs((log) => {
//       // Safely check for args existence and handle it
//       if (log.args && Array.isArray(log.args)) {
//         console.log(`[Console ${log.level}] ${log.timestamp} - ${log.args.map(arg => arg.value).join(' ')}`);
//       } else {
//         console.log(`[Console ${log.level}] ${log.timestamp} - No arguments available.`);
//       }
//   });
  
// })
