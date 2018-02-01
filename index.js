module.exports = {
    "extends": ["eslint-config-airbnb"],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
        },
    },
    "rules": {

    }
};