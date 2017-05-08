require('colors');
var _ = require('lodash');

var config = require('../config/config');

var noop = function () {};

var consoleLog = config.logging ? console.log.bind(console) : noop;

var logger = {
  log: function () {
    var tag = '[ ✨ LOG ✨ ]'.green;
    var args = _.toArray(arguments)
      .map(function (arg) {
        if (typeof arg === 'object') {
          var string = JSON.stringify(arg, null, 2);
          return tag + '  ' + string.cyan;
        } else {
          return tag + '  ' + arg.cyan;
        }
      });

    consoleLog.apply(console, args);
  },

  error: function () {
    var args = _.toArray(arguments)
      .map(function (arg) {
        arg = arg.stack || arg;
        var name = arg.name || '[ ❌ ERROR ❌ ]';
        var log = name.yellow + '  ' + arg.red;
        return log;
      });

    consoleLog.apply(console, args);
  },
};

module.exports = logger;
