### How to use:
`npm install eslint eslint-config-cetitife -D`  

And you will install eslint,babel-eslint and three of plugins(react,jsx-ally,import) automaticly.  

PS: If you want to use it in your editor eslint, please use `-g` instead of `-S` while you install.  
    This package is an experimental version following all of rules of Airbnb.  
    you can custom your personal rules in your .eslint.js file. Here is an example
```
const eslintrc = {
  "extends": ["eslint-config-cetitife"], // 包含下述配置,可覆盖
  // "parser": "babel-eslint",
  // "env": {
  //   "browser": true,
  //   "node": true,
  //   "commonjs": true,
  //   "es6": true,
  // },
  // "parserOptions": {
  //   "sourceType": "module",
  //   "ecmaVersion": 6,
  //   "ecmaFeatures": {
  //     "jsx": true,
  //     "experimentalObjectRestSpread": true,
  //   },
  // },
  // "rules": {

  // }
};
module.exports = eslintrc;
```