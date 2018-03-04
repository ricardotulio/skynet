import env from 'node-env-file'
import Promise from 'bluebird'
import { basePath } from '../config/paths'
import buildConnector from './buildConnector'
import buildBot from './buildBot'
import buildBotApi from './buildBotApi'

env(`${basePath()}/.env`)

Promise.resolve()
  .then(buildConnector)
  .then(buildBot)
  .then(buildBotApi)
