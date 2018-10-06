import koaWebpack from 'koa-webpack'

import { serverHost, serverPort } from '../build/config'
import config from '../build/webpack.client'

export default koaWebpack({
  config,
  hotClient: {
    host: {
      client: '*',
      server: serverHost,
    },
    port: serverPort + 1,
  },
  devMiddleware: {
    publicPath: null,
    watchOptions: {
      poll: !!process.env.IS_IN_DOCKER_FOR_WIN,
    },
  },
})
