/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    'summary',
    ['github-actions', {silent: false}], 
    ['jest-junit', {outputDirectory: 'reports/junit', outputName: 'report.xml'}],
  ],
  coverageDirectory: 'reports/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
};
