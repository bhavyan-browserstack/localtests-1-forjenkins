exports.command = function (callback) {
  const browser = this;

  browser.getLog('browser', function (logs) {
    const jsErrors = logs.filter(log => log.level === 'SEVERE'); // Filter only SEVERE logs

    if (typeof callback === 'function') {
      callback(jsErrors); // Pass filtered logs to callback
    } else {
      if (jsErrors.length > 0) {
        jsErrors.forEach((error) => {
          if (error.args && Array.isArray(error.args)) {
            console.error(`[JS Error] ${new Date(error.timestamp).toISOString()} - ${error.message}`);
            console.log(`[Console ${error.level}] ${error.timestamp} - ${error.args.map(arg => arg.value).join(' ')}`);
          } else {
            console.error(`[JS Error] ${new Date(error.timestamp).toISOString()} - ${error.message}`);
          }
        });
      } else {
        console.log('No JavaScript errors found.');
      }
    }
  });

  return this; // Support command chaining
};
