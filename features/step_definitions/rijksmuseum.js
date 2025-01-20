const { Given, When, Then } = require('@cucumber/cucumber');
const locatorsPage = require('/Users/bhavyananda/Desktop/Initial scripts/ass-1-v2/features/locators/locators.js');

Given('I open the Automation Practice page', async function () {
  // Call the openAutomationPracticePage method from your page object
  await browser.url('https://ultimateqa.com/automation/');
});

Then('the page title should be {string}', async function (title) {
  // Validate the page title with the expected value
  await browser.assert.titleEquals(title);
});


// Given('I dismiss the cookie dialog', function () {
//   // Ensure the cookie dialog is dismissed if it exists
//   return browser
//     .waitForElementVisible('.cookie-dialog', 1000)
//     .click('.cookie-dialog button.dismiss'); // Adjust this if the button or class name is different
// });

// When('I search {string}', function (searchTerm) {
//   return browser
//     .click('a[aria-label="Search"]')
//     .waitForElementVisible('input.search-bar-input[type="text"]', 5000)
//     .setValue('input.search-bar-input[type="text"]', searchTerm)
//     .keys(browser.Keys.ENTER);

// });

// Then('the title is {string}', function (title) {
//   return browser.assert.titleEquals(title);
// });

// Then('Body contains {string}', function (expectedText) {
//   return browser
//     .waitForElementVisible('body', 5000)
//     .assert.containsText('body', expectedText);
// });


