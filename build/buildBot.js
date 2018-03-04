'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _botbuilder = require('botbuilder');

var buildBot = function buildBot(connector) {
  var bot = new _botbuilder.UniversalBot(connector, function (session) {
    session.send('You said %s', session.message.text);
  });

  return {
    connector: connector,
    bot: bot
  };
};

exports.default = buildBot;