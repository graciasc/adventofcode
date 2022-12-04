const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [path.join(__dirname, 'tsconfig.json')]
  },
  rules: {
  }
}
