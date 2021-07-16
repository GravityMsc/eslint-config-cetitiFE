module.exports = {
  "extends": ["airbnb", "airbnb/hooks"],
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "rules": {}
};