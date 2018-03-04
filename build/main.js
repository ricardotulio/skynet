'use strict';

var _nodeEnvFile = require('node-env-file');

var _nodeEnvFile2 = _interopRequireDefault(_nodeEnvFile);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _paths = require('../config/paths');

var _buildConnector = require('./buildConnector');

var _buildConnector2 = _interopRequireDefault(_buildConnector);

var _buildBot = require('./buildBot');

var _buildBot2 = _interopRequireDefault(_buildBot);

var _buildBotApi = require('./buildBotApi');

var _buildBotApi2 = _interopRequireDefault(_buildBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nodeEnvFile2.default)((0, _paths.basePath)() + '/.env');

_bluebird2.default.resolve().then(_buildConnector2.default).then(_buildBot2.default).then(_buildBotApi2.default);