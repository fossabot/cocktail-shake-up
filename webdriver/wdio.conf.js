exports.config = {
  specs: ['./webdriver/test/**/*.spec.js'],

  maxInstances: 10,
  capabilities: [
    {
      browserName: 'chrome',
    },
  ],

  sync:           true,
  coloredLogs:    true,
  bail:           0,
  screenshotPath: './errorShots/',
  baseUrl:        'http://localhost',

  waitforTimeout:         10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount:   3,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object should have the
  // plugin name as key and the desired plugin options as properties. Make sure you have
  // the plugin installed before running any tests. The following plugins are currently
  // available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  // plugins: {
  //     webdrivercss: {
  //         screenshotRoot: 'my-shots',
  //         failedComparisonsRoot: 'diffs',
  //         misMatchTolerance: 0.05,
  //         screenWidth: [320,480,640,1024]
  //     },
  //     webdriverrtc: {},
  //     browserevent: {}
  // },
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services:               ['selenium-standalone'],
  framework:              'mocha',
  reporters:              ['concise'],
  mochaOpts:              {
    ui: 'bdd',
  },
};
