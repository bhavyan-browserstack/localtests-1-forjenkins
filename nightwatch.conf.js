
const chromedriver = require.resolve('chromedriver');

module.exports = {
 



  // Enable parallel test execution
  test_workers: {
    enabled: true,
  },
  live_output: true,
          custom_commands_path: ['commands'], // commanda



  // Test settings
  test_settings: {
    default: {
      "launch_url": "http://localhost", // Set the default URL for your tests
      webdriver: {
        start_process: true,
        server_path: 'node_modules/chromedriver/bin/chromedriver', // Ensure path is correct
      },
      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:loggingPrefs': { browser: 'ALL' }, // Enable browser log retrieval
        // If you need specific Chrome options, you can define them here:
        chromeOptions: {
          // Example: headless mode
          args: ['--headless', '--disable-gpu', '--window-size=1920x1080'],
        },
      },
      test_runner: {
        type: 'cucumber',
        options: {
          feature_path: 
            'features/*.feature',

        },
        src_folders: ['features'],
        custom_commands_path: ['commands'], // commands
        
      },
    },
  },

  // usage_analytics: {
  //   enabled: true,
  //   log_path: './logs/analytics',
  //   client_id: 'ea208409-06ef-43eb-a5a4-f3292f544ba5',
  // },
}

// const bstackOptions = {
//   'bstack:options' : {
//     buildName: "automate intergration A",
//     projectName: "assignment1",
//     testObservability: "true",
//     networkLogs: "true",
//     consoleLogs: "info",
//     "seleniumVersion" : "4.0.0",
//     userName: '${BROWSERSTACK_USERNAME}' || 
//     accessKey: '${BROWSERSTACK_ACCESS_KEY}' || 
//   },
// }
// const browserStack = {
//   webdriver: {
//     start_process: false,
//     timeout_options: {
//       timeout: 120000,
//       retry_attempts: 3
//     },
//     keep_alive: true
//   },
//   selenium: {
//     start_process: false, // Do not start a local Selenium server when using BrowserStack
//     server_path: '',
//     host: 'localhost',
//     port: 4444
//   },
//   desiredCapabilities: {
//     browserName: 'chrome',
//     ...bstackOptions
//   }
// }

// const nightwatchConfigs = {
//    // Path to folders where your step definitions are located
//    src_folders: ['features'],
//    page_objects_path: "features/pages", 
//    custom_commands_path: ['commands'], // commands
//   live_output: true,
//   plugins: ['@nightwatch/browserstack'],
//   '@nightwatch/browserstack': {
//     browserstackLocal: 'false', opts: { forceLocal: false } // set true to manage browserstack local tunnel. Defaults to false.
//   },
//   test_settings: {
//     default: {
//       launch_url: 'https://nightwatchjs.org'
//     },
//     browserstack:  {
//       ...browserStack
//     },
//     'browserstack.Chrome': {
//       extends: 'browserstack',
//       desiredCapabilities: {
//         browserName: 'Chrome',
//         browserVersion: '120.0',
//         'bstack:options' : {
//           os: 'Windows',
//           osVersion: '10',
//           local: 'false'
//         }
//       }
//     },
//     'browserstack.Safari': {
//       extends: 'browserstack',
//       desiredCapabilities: {
//         browserName: 'Safari',
//         browserVersion: '15.6',
//         'bstack:options' : {
//           os: 'OS X',
//           osVersion: 'Monterey',
//           local: 'false'
//         }
//       }
//     },
//     'browserstack.Chromium': {
//       extends: 'browserstack',
//       desiredCapabilities: {
//         browserName: 'Chromium',
//         browserVersion: 'portrait',
//         'bstack:options' : {
//           deviceName: 'iPhone 13',
//           osVersion: '15',
//           local: 'false'
//         }
//       }
//     }
//   }
// }

// // module.exports = nightwatchConfigs;

// // const bstackOptions = {
// //   'bstack:options' : {
// //     buildName: "bstack-demo",
// //     projectName: "BrowserStack Sample",
// //     testObservability: "true",
// //     networkLogs: "true",
// //     consoleLogs: "info",
// //     "source": "nightwatch:sample-sdk:v1.0",
// //     "seleniumVersion" : "4.0.0",
// //     userName: 
// //     accessKey:
// //   },
// // }
// // const browserStack = {
// //   webdriver: {
// //     start_process: false,
// //     timeout_options: {
// //       timeout: 120000,
// //       retry_attempts: 3
// //     },
// //     keep_alive: true
// //   },
// //   selenium: {
// //     host: 'hub.browserstack.com',
// //     port: 443
// //   },
// //   desiredCapabilities: {
// //     browserName: 'chrome',
// //     ...bstackOptions
// //   }
// // }
// // const nightwatchConfigs = {
// //   src_folders: ['features'],
// //   live_output: false,
// //   plugins: ['@nightwatch/browserstack'],
// //   '@nightwatch/browserstack': {
// //     browserstackLocal: 'false', opts: { forceLocal: false } // set true to manage browserstack local tunnel. Defaults to false.
// //   },
// //   test_settings: {
// //     default: {
// //       launch_url: 'https://nightwatchjs.org'
// //     },
// //     browserstack:  {
// //       ...browserStack
// //     },
// //     'browserstack.Chrome': {
// //       extends: 'browserstack',
// //       desiredCapabilities: {
// //         browserName: 'Chrome',
//         browserVersion: '120.0',
//         'bstack:options' : {
//           os: 'Windows',
//           osVersion: '10',
//           local: 'false'
//         }
//       }
//     },
//     'browserstack.Safari': {
//       extends: 'browserstack',
//       desiredCapabilities: {
//         browserName: 'Safari',
//         browserVersion: '15.6',
//         'bstack:options' : {
//           os: 'OS X',
//           osVersion: 'Monterey',
//           local: 'false'
//         }
//       }
//     },
//     'browserstack.Chromium': {
//       extends: 'browserstack',
//       desiredCapabilities: {
//         browserName: 'Chromium',
//         browserVersion: 'portrait',
//         'bstack:options' : {
//           deviceName: 'iPhone 13',
//           osVersion: '15',
//           local: 'false'
//         }
//       }
//     }
//   }
// }

// module.exports = nightwatchConfigs;


// // const bstackOptions = {
// //   'bstack:options' : {
// //     "os" : "OS X",
// //     "osVersion" : "Big Sur",
// //     "buildName" : "browserstack-build-77777",
// //     "sessionName" : "BStack linktest snippet",
// //     "seleniumVersion" : "4.0.0",
// //     userName:  || 'YOUR_USERNAME',
// //     accessKey: || 'YOUR_ACCESS_KEY',
// //   },
// // }

// // const browserStack = {
// //   webdriver: {
//     start_process: false,
//     timeout_options: {
//       timeout: 120000,
//       retry_attempts: 3
//     },
//     keep_alive: true
//   },

//   selenium: {
//     host: 'hub.browserstack.com',
//     port: 443
//   },

//   desiredCapabilities: {
//     browserName: 'chrome',
//     ...bstackOptions
//   }
// }

// const nightwatchConfigs = {
//   src_folders: ['features'],
//   live_output: true,
//   plugins: ['@nightwatch/browserstack'],
//   '@nightwatch/browserstack': {
//     browserstackLocal: false, opts: { forceLocal: true },
//     test_observability: {
//       enabled: true,
//       user: 'bhavyananda_j1URsW' || process.env.BROWSERSTACK_USERNAME,
//       key: '7MzqwjHuz4zB5mqHLHdF' || process.env.BROWSERSTACK_ACCESS_KEY,
//       projectName: "sample_initial",
//       buildName: "sample_o11y_1",
//       buildTag: ["build for aut","o11y1"],
//     }
//   },

//   test_settings: {
//     default: {
//       launch_url: 'https://nightwatchjs.org'
//     },

//     browserstack:  {
//       ...browserStack
//     },
//     test_runner: {
//               type: 'cucumber',
//               options: {
//                 feature_path: 
//                   'features/*.feature',
      
//               },
//               src_folders: ['features'],
//             },
              
            

//     "browserstack.chrome": {
//       ...browserStack,
//       desiredCapabilities:{
//         browserName: 'chrome',
//         ...bstackOptions
//       }
//     },
//     "browserstack.firefox": {
//       ...browserStack,
//       desiredCapabilities:{
//         browserName: 'firefox',
//         ...bstackOptions
//       }
//     },
//     "browserstack.edge": {
//       ...browserStack,
//       desiredCapabilities:{
//         browserName: 'Edge',
//         ...bstackOptions
//       }
//     }
//   }
// }




// module.exports = nightwatchConfigs;
//...

// const bstackOptions = {
//     'bstack:options' : {
//       buildName: "automate intergration A",
//       projectName: "assignment1",
//       testObservability: "true",
//       networkLogs: "true",
//       consoleLogs: "info",
//       "seleniumVersion" : "4.0.0",
//       userName: '${BROWSERSTACK_USERNAME}' || 
//       accessKey: '${BROWSERSTACK_ACCESS_KEY}' || 
//     },
//   }
// const browserStack = {
//     webdriver: {
//       start_process: true,
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
//   src_folders: ['features'],
//      page_objects_path: "features/pages", 
//      custom_commands_path: ['commands'], // commands
//   live_output:true,
//   // plugins: ['@nightwatch/browserstack'],
//   '@nightwatch/browserstack': {
//     browserstackLocal: 'false', opts: { forceLocal: false } ,// set true to manage browserstack local tunnel. Defaults to false.
//     test_observability: {
//       enabled: true,
//       user: || process.env.BROWSERSTACK_USERNAME,
//       key: '|| process.env.BROWSERSTACK_ACCESS_KEY,
//       projectName: "sample_initial",
//       buildName: "sample_o11y_1",
//       buildTag: ["build for aut","o11y1"],
//     }
//   },
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
//       desiredCapabilities: {
//         browserName: 'chrome',
//         'goog:loggingPrefs': { browser: 'ALL' }, // Enable browser log retrieval
//         // If you need specific Chrome options, you can define them here:
//         chromeOptions: {
//           // Example: headless mode
//           args: ['--headless', '--disable-gpu', '--window-size=1920x1080'],
//         },
//       },
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