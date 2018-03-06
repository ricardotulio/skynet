import { UniversalBot } from 'botbuilder'

const buildBot = connector => new UniversalBot(connector, (session) => {
  session.send('You said %s', session.message.text)
})

export default buildBot
