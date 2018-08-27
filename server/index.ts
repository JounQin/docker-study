import _debug from 'debug'
import Koa from 'koa'
import serve from 'koa-static'

import { serverHost, serverPort } from '../build/config'

const debug = _debug('1stg:server')

const app = new Koa()

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  require('./dev').default.then(app.use.bind(app))
} else {
  app.use(serve('dist/static'))
}

app.listen(serverPort, serverHost, () => {
  debug('Server is now running at %s:%d.', serverHost, serverPort)
})
