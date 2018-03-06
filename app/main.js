import env from 'node-env-file'
import restify from 'restify'
import { path } from 'ramda'
import { basePath } from '../config/paths'
import botBuilder from './botBuilder'

env(`${basePath()}/.env`)

const credentials = {
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
}

const bot = botBuilder.build(credentials)

const connector = path(['connectors', '*'], bot)

const server = restify.createServer()
server.listen(process.env.PORT || 3987, () => {
  console.log('%s listening on %s', server.name, server.url)
})

server.post('/v1/messages', connector.listen())
