import { ChatConnector } from 'botbuilder'

const buildConnector = () => new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
})

export default buildConnector
