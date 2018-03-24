import {
  MemoryBotStorage,
  UniversalBot,
} from 'botbuilder'

const inMemoryStorage = new MemoryBotStorage()

const buildBot = connector => new UniversalBot(connector, (session) => {
  session.send('You said %s', session.message.text)
}).set('storage', inMemoryStorage)

export default buildBot
