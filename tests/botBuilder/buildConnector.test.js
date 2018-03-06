import { ChatConnector } from 'botbuilder'
import buildConnector from '../../app/botBuilder/buildConnector'

test('if can build a connector', () => {
  const credentials = {
    appId: 'fake_app_id',
    appPassword: 'fake_app_password',
  }

  const connector = buildConnector(credentials)

  expect(connector).toBeInstanceOf(ChatConnector)
})
