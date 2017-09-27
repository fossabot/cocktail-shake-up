module.exports = wallaby => {
  return {
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    env: {
      type: 'node',
    },

    files: ['src/**/*.js', '!src/**/*.spec.js', 'src/**/*.css'],

    tests: ['src/**/*.spec.js'],

    testFramework: 'jest',
  };
};
