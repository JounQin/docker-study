import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import merge from 'webpack-merge'

import { __DEV__, hashType, publicPath, resolve } from './config'
import base from './webpack.base'

export default merge(base, {
  entry: {
    app: [resolve('src/index.tsx')],
  },
  output: {
    path: resolve('dist/static'),
    publicPath,
    filename: `[name].[${hashType}].js`,
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
    }),
  ],
})
