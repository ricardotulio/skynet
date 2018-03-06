import {
  ChatConnector,
  UniversalBot,
} from 'botbuilder'
import buildBot from '../../app/botBuilder/buildBot'

test('if can build a bot', () => {
  const credentials = {
    appId: 'fake_app_id',
    appKey: 'fake_app_key',
  }
  const connector = new ChatConnector(credentials)
  const bot = buildBot(connector)

  expect(bot).toBeInstanceOf(UniversalBot)
})
