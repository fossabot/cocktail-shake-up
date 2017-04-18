module.exports = wallaby => {
  return {
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    env: {
      type: 'node',
    },
    files:         ['src/**/*.js', 'src/**/*.css'],
    tests:         ['test/**/*.spec.js'],
    testFramework: 'jest',
  };
};
