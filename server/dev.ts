import koaWebpack from 'koa-webpack'

import config from '../build/webpack.client'

export default koaWebpack({
  config,
})
