import koaWebpack from 'koa-webpack'

import { serverHost } from '../build/config'
import config from '../build/webpack.client'

export default koaWebpack({
  config,
  hotClient: {
    host: {
      client: '*',
      server: serverHost,
    },
    port: 7001,
  },
  devMiddleware: {
    publicPath: null,
    watchOptions: {
      poll: !!process.env.IS_IN_DOCKER_FOR_WIN,
    },
  },
})
