const path = require('path')
module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loaders: ['awesome-typescript-loader', 'react-docgen-typescript-loader']
    },
    {
      test: /\.(eot|png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.(css|scss)$/,
      loaders: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader?sourceMap'
      ],
      include: path.resolve(__dirname, '../')
    }
  )

  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.css',
    '.scss',
    '.eot',
    '.png',
    '.woff',
    '.woff2',
    '.eot',
    '.ttf',
    '.svg'
  )

  return config
}
