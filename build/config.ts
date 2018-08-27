import path from 'path'

export const DEV = 'development'
export const PROD = 'production'

export type NodeEnv = typeof DEV | typeof PROD

export const NODE_ENV: NodeEnv = (process.env.NODE_ENV as NodeEnv) || DEV

export const __DEV__ = NODE_ENV === DEV

export const resolve = (...args: string[]) =>
  path.resolve(process.cwd(), ...args)

export const serverHost = process.env.HOST || 'localhost'
export const serverPort = +process.env.PORT || 7000

export const hashType = __DEV__ ? 'hash' : 'contenthash'

export const publicPath = '/'
