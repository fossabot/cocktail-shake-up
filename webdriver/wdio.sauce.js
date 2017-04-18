const { name, } = require('../package.json');

const config = {
  BUILD: `${name}-${process.env.CIRCLE_BUILD_NUM ? process.env.CIRCLE_BUILD_NUM : 'local'}`,

  CHROME:  'chrome',
  EDGE:    'MicrosoftEdge',
  FIREFOX: 'firefox',
  IE:      'internet explorer',
  OPERA:   'opera',
  SAFARI:  'safari',

  WIN: {
    NAME:     'Windows',
    PLATFORM: 'Windows',
    LATEST:   '10',
    PREVIOUS: '8.1',
  },

  MAC: {
    PLATFORM: 'OS X',
    NAME:     'macOS',
    LATEST:   '10.12',
    PREVIOUS: '10.11',
  },
};

exports.config = {
  user: process.env.SAUCE_USERNAME,
  key:  process.env.SAUCE_ACCESS_KEY,

  specs:        ['./webdriver/test/**/*.spec.js'],
  maxInstances: 10,
  updateJob:    false,

  capabilities: [
    {
      browserName: config.EDGE,
      build:       config.BUILD,
      name:        `${config.WIN.NAME} ${config.WIN.LATEST}`,
      platform:    `${config.WIN.PLATFORM} ${config.WIN.LATEST}`,
      version:     'latest',
    },
    {
      browserName: config.CHROME,
      build:       config.BUILD,
      name:        `${config.WIN.NAME} ${config.WIN.LATEST}`,
      platform:    `${config.WIN.PLATFORM} ${config.WIN.LATEST}`,
      version:     'latest',
    },
    {
      browserName: config.FIREFOX,
      build:       config.BUILD,
      name:        `${config.WIN.NAME} ${config.WIN.LATEST}`,
      platform:    `${config.WIN.PLATFORM} ${config.WIN.LATEST}`,
      version:     'latest',
    },
    {
      browserName: config.IE,
      build:       config.BUILD,
      name:        `${config.WIN.NAME} ${config.WIN.LATEST}`,
      platform:    `${config.WIN.PLATFORM} ${config.WIN.LATEST}`,
      version:     'latest',
    },
    {
      browserName: config.CHROME,
      build:       config.BUILD,
      name:        `${config.WIN.NAME} ${config.WIN.PREVIOUS}`,
      platform:    `${config.WIN.PLATFORM} ${config.WIN.PREVIOUS}`,
      version:     'latest',
    },
    {
      browserName: config.FIREFOX,
      build:       config.BUILD,
      name:        `${config.WIN.NAME} ${config.WIN.PREVIOUS}`,
      platform:    `${config.WIN.PLATFORM} ${config.WIN.PREVIOUS}`,
      version:     'latest',
    },
    {
      browserName: config.IE,
      build:       config.BUILD,
      name:        `${config.WIN.NAME} ${config.WIN.PREVIOUS}`,
      platform:    `${config.WIN.PLATFORM} ${config.WIN.PREVIOUS}`,
      version:     'latest',
    },
    {
      browserName: config.CHROME,
      build:       config.BUILD,
      name:        `${config.MAC.NAME} ${config.MAC.LATEST}`,
      platform:    `${config.MAC.PLATFORM} ${config.MAC.LATEST}`,
      version:     'latest',
    },
    {
      browserName: config.FIREFOX,
      build:       config.BUILD,
      name:        `${config.MAC.NAME} ${config.MAC.LATEST}`,
      platform:    `${config.MAC.PLATFORM} ${config.MAC.LATEST}`,
      version:     'latest',
    },
    {
      browserName: config.SAFARI,
      build:       config.BUILD,
      name:        `${config.MAC.NAME} ${config.MAC.LATEST}`,
      platform:    `${config.MAC.PLATFORM} ${config.MAC.LATEST}`,
      version:     'latest',
    },
    {
      browserName: config.CHROME,
      build:       config.BUILD,
      name:        `${config.MAC.NAME} ${config.MAC.PREVIOUS}`,
      platform:    `${config.MAC.PLATFORM} ${config.MAC.PREVIOUS}`,
      version:     'latest',
    },
    {
      browserName: config.FIREFOX,
      build:       config.BUILD,
      name:        `${config.MAC.NAME} ${config.MAC.PREVIOUS}`,
      platform:    `${config.MAC.PLATFORM} ${config.MAC.PREVIOUS}`,
      version:     'latest',
    },
    {
      browserName: config.SAFARI,
      build:       config.BUILD,
      name:        `${config.MAC.NAME} ${config.MAC.PREVIOUS}`,
      platform:    `${config.MAC.PLATFORM} ${config.MAC.PREVIOUS}`,
      version:     'latest',
    },
  ],

  screenshotPath:         './errorShots/',
  waitforTimeout:         10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount:   3,

  sauceConnect: false,
  services:     ['sauce'],
  framework:    'mocha',
  mochaOpts:    {
    ui: 'bdd',
  },
};
