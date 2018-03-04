import env from 'node-env-file'
import restify from 'restify'
import {
  ChatConnector,
  UniversalBot,
} from 'botbuilder'
import { basePath } from '../config/paths'

env(basePath() + '/.env')

const server = restify.createServer()
server.listen(process.env.PORT || 3987, () => {
  console.log('% listening on %s', server.name, server.url)
})

const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
})

server.post('/api/messages', connector.listen())

const bot = new UniversalBot(connector, session => {
  session.send('You said %s', session.message.text)
})
