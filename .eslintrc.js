module.exports = {
  extends: [
    'plugin:goztrk/base',
    'plugin:eslint-plugin/recommended',
  ],
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 'latest',
  },
  rules: {
    'global-require': 'off',
  },
};
