import { UniversalBot } from 'botbuilder'

const buildBot = (connector) => {
  const bot = new UniversalBot(connector, (session) => {
    session.send('You said %s', session.message.text)
  })

  return {
    connector,
    bot,
  }
}

export default buildBot
