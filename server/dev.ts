import koaWebpack from 'koa-webpack'

import config from '../build/webpack.client'

export default koaWebpack({
  config,
  hotClient: {
    host: '0.0.0.0',
    port: 7001,
  },
})
