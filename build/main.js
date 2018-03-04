'use strict';

var _nodeEnvFile = require('node-env-file');

var _nodeEnvFile2 = _interopRequireDefault(_nodeEnvFile);

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _botbuilder = require('botbuilder');

var _paths = require('../config/paths');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nodeEnvFile2.default)((0, _paths.basePath)() + '/.env');

var server = _restify2.default.createServer();
server.listen(process.env.PORT || 3987, function () {
  console.log('% listening on %s', server.name, server.url);
});

var connector = new _botbuilder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

var bot = new _botbuilder.UniversalBot(connector, function (session) {
  session.send('You said %s', session.message.text);
});