const path = require('path')
module.exports = ({config}) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loaders: ['ts-loader', 'react-docgen-typescript-loader'],
    },
    {
      test: /\.md$/,
      use: 'markdown-loader',
    },
    {
      test: /\.woff(2)?(\?[a-z0-9#=&.]+)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.(eot|png|eot|ttf|svg)(\?[a-z0-9#=&.]+)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'Fonts/[name].[ext]',
            outputPath: 'Fonts/',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(css|scss)$/,
      loaders: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    }
  )

  config.resolve = {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss', '.md'],
  },

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
