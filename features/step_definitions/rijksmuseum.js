const { Given, When, Then } = require('@cucumber/cucumber');
const linkFunc= require('../pages/linkFuncs.js');

Given('I open the Automation Practice page', async function () {
  // Call the openAutomationPracticePage method from your page object
  await linkFunc.goToURL('https://ultimateqa.com/automation/');
});

Then('the page title should be {string}', async function (title) {
  // Validate the page title with the expected value
  await linkFunc.checkTitle(title) ;
});




