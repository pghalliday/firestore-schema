module.exports = {
  extends: "google",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'require-jsdoc': ['off'],
  },
};
