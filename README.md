### How to use:
`npm install eslint eslint-config-cetitife -D`  

And you will install babel-eslint and three of plugins(react,jsx-ally,import) automaticly.  

PS: If you want to use it in your editor eslint, you also need your editor eslint plugin.  
    This package is an experimental version following all of rules of Airbnb.  
    you can custom your personal rules in your .eslintrc.js file. Here is an example
```
const eslintrc = {
  "extends": ["eslint-config-cetitife"], // including these options
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