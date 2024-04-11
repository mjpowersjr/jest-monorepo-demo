'use strict'
const baseConfig = require('../../jest.config.base')

const packageName = require('./package.json').name.split('/').pop();

module.exports = {
    ...baseConfig,
    displayName: packageName,
}
