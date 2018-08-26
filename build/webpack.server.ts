import merge from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'

import { resolve } from './config'
import base from './webpack.base'

export default merge(base, {
  entry: resolve('server/index.ts'),
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: nodeExternals(),
})
