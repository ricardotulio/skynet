import { pipe } from 'ramda'
import buildBot from './buildBot'
import buildConnector from './buildConnector'

const build = pipe(
  buildConnector,
  buildBot,
)

export default {
  build,
}
