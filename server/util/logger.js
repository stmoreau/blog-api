require('colors');
var _ = require('lodash');

var config = require('../config/config');

// create a noop (no operation) function for when loggin is disabled
var noop = function () {};

// check if loggin is enabled in the config
var consoleLog = config.logging ? console.log.bind(console) : noop;

var logger = {
  log: function () {
    var args = _.toArray(arguments)
      .map(function (arg) {
        if (typeof arg === 'object') {
          var string = JSON.stringify(arg, 2);
          return string.magenta;
        } else {
          arg = String(arg);
          return arg.magenta;
        }
      });

    consoleLog.apply(console, args);
  },

  error: function () {
    consoleLog.apply(console, _.toArray(arguments));
  },
};

module.exports = logger;
