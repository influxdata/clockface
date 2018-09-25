const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  },{
    test: /(\.s[ca]ss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })
  defaultConfig.plugins.push(new TSDocgenPlugin())
  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  return defaultConfig
}