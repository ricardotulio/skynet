import restify from 'restify'
import { prop } from 'ramda'

const createBotApi = (bot) => {
  const connector = prop('connector', bot)
  const server = restify.createServer()

  server.listen(process.env.PORT || 3987, () => {
    console.log('% listening on %s', server.name, server.url)
  })

  server.post('/api/messages', connector.listen())

  return server
}

export default createBotApi
