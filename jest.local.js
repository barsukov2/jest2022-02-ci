module.exports = {
  testEnvironment: 'node',
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "API tests",
      "outputPath": "test-report/index.html",
      "includeFailureMsg": true
    }]
  ],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/specs/*.spec.*'],
  globals: {
    testTimeout: 50000,
  },
  verbose: true,
};
