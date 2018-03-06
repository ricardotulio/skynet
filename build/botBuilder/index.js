'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _buildBot = require('./buildBot');

var _buildBot2 = _interopRequireDefault(_buildBot);

var _buildConnector = require('./buildConnector');

var _buildConnector2 = _interopRequireDefault(_buildConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var build = (0, _ramda.pipe)(_buildConnector2.default, _buildBot2.default);

exports.default = {
  build: build
};