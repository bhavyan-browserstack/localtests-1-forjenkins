// const chromedriver = require.resolve('chromedriver');
// const bstackOptions = {
//     'bstack:options' : {
//       buildName: "automate intergration A",
//       projectName: "assignment1",
//       testObservability: "true",
//       networkLogs: "true",
//       consoleLogs: "info",
//       "seleniumVersion" : "4.0.0",
//       userName: '${BROWSERSTACK_USERNAME}' || 'bhavyananda_j1URsW',
//       accessKey: '${BROWSERSTACK_ACCESS_KEY}' || '7MzqwjHuz4zB5mqHLHdF',
//     },
//   }
// const browserStack = {
//     webdriver: {
//       start_process: false,
//       timeout_options: {
//         timeout: 120000,
//         retry_attempts: 3
//       },
//       keep_alive: true
//     },
//     selenium: {
//       host: 'hub.browserstack.com',
//       port: 443
//     },
//     desiredCapabilities: {
//       browserName: 'chrome',
//       ...bstackOptions
//     }
//   };

// module.exports = {

//   // Enable parallel test execution
//   test_workers: {
//     enabled: true,
//   },
//   live_output: true,
//   plugins: ['@nightwatch/browserstack'],
//   // Test settings
//   test_settings: {
//     default: {
//       "launch_url": "http://localhost", // Set the default URL for your tests
//     //   webdriver: {
//     //     start_process: true,
//     //     server_path: 'node_modules/chromedriver/bin/chromedriver', // Ensure path is correct
//     //   },
//       browserStack:{
//         ...browserStack,
//       },
//       'browserstack.Chrome': {
//         extends: 'browserstack',
//         desiredCapabilities: {
//           browserName: 'Chrome',
//           browserVersion: '120.0',
//           'bstack:options' : {
//             os: 'Windows',
//             osVersion: '10',
//             local: 'false'
//           }
//         }
//       },
//       screenshots: {
//         enabled: true,
//         path: 'screens',
//         on_failure: true,
//       },
//     //   desiredCapabilities: {
//     //     browserName: 'chrome',
//     //     'goog:loggingPrefs': { browser: 'ALL' }, // Enable browser log retrieval
//     //     // If you need specific Chrome options, you can define them here:
//     //     chromeOptions: {
//     //       // Example: headless mode
//     //       args: ['--headless', '--disable-gpu', '--window-size=1920x1080'],
//     //     },
//     //   },
//       test_runner: {
//         type: 'cucumber',
//         options: {
//           feature_path: 
//             'features/*.feature',

//         },
//         src_folders: ['features'],
//         custom_commands_path: ['commands'], // commands
        
//       },
//     },
//   },

//   usage_analytics: {
//     enabled: true,
//     log_path: './logs/analytics',
//     client_id: 'ea208409-06ef-43eb-a5a4-f3292f544ba5',
//   },
// }