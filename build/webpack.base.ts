import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { Configuration } from 'webpack'

import { NODE_ENV, resolve } from './config'

const config: Configuration = {
  mode: NODE_ENV,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-plain-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
}

export default config
