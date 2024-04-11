/** @type {import('ts-jest').JestConfigWithTsJest} */
'use strict'
const baseConfig = require('./jest.config.base')

module.exports = {
  ...baseConfig,
  projects: [
    '<rootDir>/packages/*/jest.config.js',
  ],
};
