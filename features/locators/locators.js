module.exports = {
  url: 'https://ultimateqa.com/automation/', 

  elements: {
    title: 'title',  
    xPath: '//a[contains(@href, "{hrefValue}")]',


  },

  commands: [{
    // openAutomationPracticePage: async function() {
    //   await browser
    //     .navigateTo()  
    //     .waitForElementVisible('@title', 5000);  // Wait for title to be visible
    // },

    // validatePageTitle: function(expectedTitle) {
    //   browser.getTitle(function(title) {
    //     return browser.assert.titleEquals(title)
    //   });
    //   return browser;  
    // }
  }]
};
