
const additonalEnvironments = require("./environments.js");
const events = require('events');
events.EventEmitter.defaultMaxListeners = 20;

if(!additonalEnvironments.test_settings)
  additonalEnvironments.test_settings = {};

const bstackOptions = {
  'bstack:options' : {
    "os" : "OS X",
    "osVersion" : "Big Sur",
    "buildName" : "browserstack-build-1",
    "sessionName" : "BStack nightwatch snippet",
    "source": "nightwatch:sample-sdk:v1.0",
    "seleniumVersion" : "4.0.0",
    userName: '' || process.env.BROWSERSTACK_USERNAME,
    accessKey: '' || process.env.BROWSERSTACK_ACCESS_KEY,
    "debug" : "true",
    "networkLogs": "true",
    "consoleLogs": "info"
  },
}

const browserStack = {
  webdriver: {
    start_process: false,
    timeout_options: {
      timeout: 120000,
      retry_attempts: 3
    },
    keep_alive: true
  },

  selenium: {
    host: 'hub.browserstack.com',
    port: 443
  },

  desiredCapabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--enable-logging', '--v=1'], // Ensure logging is enabled
    },
    loggingPrefs: {
      browser: 'ALL', // Capture all browser-level logs
    },
    ...bstackOptions
  }
}

const nightwatchConfigs = {
  src_folders: ['features'],
  output_folder: false, //
  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: 
        'features/*.feature',

    },
    src_folders: ['features'],
    custom_commands_path: ['commands'], // commands
    
  },
  live_output: true,
  plugins: ['@nightwatch/browserstack'],
  '@nightwatch/browserstack': {
    browserstackLocal: false // set true to manage browserstack local tunnel. Defaults to false.
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack:  {
      ...browserStack
    },

    "browserstack.chrome": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'chrome',
        loggingPrefs: {
          browser: 'ALL',
        },
        ...bstackOptions
      }
    },
    "browserstack.firefox": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'firefox',
        ...bstackOptions
      }
    },
    "browserstack.edge": {
      ...browserStack,
      desiredCapabilities:{
        browserName: 'Edge',
        ...bstackOptions
      }
    }
  }
}

for(let key in additonalEnvironments.test_settings) {
  nightwatchConfigs.test_settings[key] = {
    ...browserStack,
    ...additonalEnvironments.test_settings[key]
  };
}

module.exports = nightwatchConfigs;