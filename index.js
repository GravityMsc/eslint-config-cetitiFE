module.exports = {
  "extends": ["airbnb", "airbnb/hooks"],
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true
  },
  "parserOptions": {
    "requireConfigFile": false,
    "sourceType": "module",
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "rules": {}
};