module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "extends": "airbnb/legacy", // fijate que extiende airbnb/legacy, capaz podes extender otro que te guste más
  "rules": {
    "new-cap": 1,
    "no-use-before-define": 0,
    "func-names": 0,
    "no-param-reassign": 1,
    "vars-on-top": 0,
    "max-len": [2, {
      "code": 120,
      "tabWidth": 2,
      "ignoreUrls": true
    }],
    "guard-for-in": 0,
    "space-before-function-paren": [2, {
      "anonymous": "always",
      "named": "never"
    }],
    "no-shadow": 0,
    "no-unused-vars": 1,
    "consistent-return": 0,
    "camelcase": 0,
    "default-case": 0,
    "no-undef": 1,
    "no-console": 0,
  },
  "globals": {
    // acá pone las var globales que quieras
  }
};