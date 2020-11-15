module.exports = {
  reporters: ['default', ['jest-sonar', {
    reportedFilePath: 'relative',
    relativeRootDir: '../'
  }]],
};
