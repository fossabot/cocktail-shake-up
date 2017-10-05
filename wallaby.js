module.exports = wallaby => {
  return {
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    env: {
      type: 'node',
    },

    files: ['app/**/*.js', '!app/**/*.spec.js', 'app/**/*.css'],

    tests: ['app/**/*.spec.js'],

    testFramework: 'jest',
  };
};
