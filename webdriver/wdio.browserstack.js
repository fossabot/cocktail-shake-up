const { name, } = require('../package.json');

const config = {
  BUILD: `${name}-${process.env.CIRCLE_BUILD_NUM ? process.env.CIRCLE_BUILD_NUM : 'local'}`,

  CHROME:  'chrome',
  EDGE:    'edge',
  FIREFOX: 'firefox',
  IE:      'ie',
  OPERA:   'opera',
  SAFARI:  'safari',

  WIN: {
    NAME:     'Windows',
    PLATFORM: 'WINDOWS',
    LATEST:   '10',
    PREVIOUS: '8.1',
  },

  MAC: {
    PLATFORM: 'OS X',
    NAME:     'macOS',
    LATEST:   'Sierra',
    PREVIOUS: 'El Capitan',
  },
};

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key:  process.env.BROWSERSTACK_ACCESS_KEY,

  specs:        ['./webdriver/test/**/*.spec.js'],
  maxInstances: 10,
  updateJob:    false,

  capabilities: [
    {
      browser:    config.CHROME,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.LATEST}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.LATEST,
    },
    {
      browser:    config.EDGE,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.LATEST}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.LATEST,
    },
    {
      browser:    config.FIREFOX,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.LATEST}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.LATEST,
    },
    {
      browser:    config.IE,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.LATEST}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.LATEST,
    },
    {
      browser:    config.CHROME,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.PREVIOUS}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.PREVIOUS,
    },
    {
      browser:    config.FIREFOX,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.PREVIOUS}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.PREVIOUS,
    },
    {
      browser:    config.IE,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.PREVIOUS}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.PREVIOUS,
    },
    {
      browser:    config.OPERA,
      build:      config.BUILD,
      name:       `${config.WIN.NAME} ${config.WIN.PREVIOUS}`,
      os:         config.WIN.PLATFORM,
      os_version: config.WIN.PREVIOUS,
    },
    {
      browser:    config.CHROME,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.PREVIOUS}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.PREVIOUS,
    },
    {
      browser:    config.FIREFOX,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.PREVIOUS}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.PREVIOUS,
    },
    {
      browser:    config.OPERA,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.PREVIOUS}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.PREVIOUS,
    },
    {
      browser:    config.SAFARI,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.PREVIOUS}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.PREVIOUS,
    },
    {
      browser:    config.CHROME,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.LATEST}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.LATEST,
    },
    {
      browser:    config.FIREFOX,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.LATEST}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.LATEST,
    },
    {
      browser:    config.OPERA,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.LATEST}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.LATEST,
    },
    {
      browser:    config.SAFARI,
      build:      config.BUILD,
      name:       `${config.MAC.NAME} ${config.MAC.LATEST}`,
      os:         config.MAC.PLATFORM,
      os_version: config.MAC.LATEST,
    },
  ],

  screenshotPath:         './errorShots/',
  waitforTimeout:         10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount:   3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
  },
};
