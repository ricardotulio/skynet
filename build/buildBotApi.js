'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createBotApi = function createBotApi(bot) {
  var connector = (0, _ramda.prop)('connector', bot);
  var server = _restify2.default.createServer();

  server.listen(process.env.PORT || 3987, function () {
    console.log('% listening on %s', server.name, server.url);
  });

  server.post('/api/messages', connector.listen());

  return server;
};

exports.default = createBotApi;