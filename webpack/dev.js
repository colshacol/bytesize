const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
require('dotenv').config()

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: ['./src/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    moment: 'moment',
    codemirror: 'CodeMirror'
  },

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/',
    compress: true,
    port: 9000,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:9876',
        secure: false
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'string-replace-loader',
        options: {
          multiple: [
            {
              search: '$SERVER_ADDRESS$',
              replace: `http://localhost:${process.env.DEV_PORT}`
            },
            {
              search: '$SOCKET_ADDRESS$',
              replace: `ws://localhost:${process.env.DEV_PORT}`
            },
            {
              search: '$API_VERSION$',
              replace: `${process.env.API_VERSION}`
            },
            {
              search: '$API_PATH$',
              replace: `/api/${process.env.API_VERSION}`
            }
          ]
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['./.babelrc.js']
            }
          }
        ]
      },
      {
        test: /\.(css|styl)$/,
        include: /(editorThemes|potionsTheme|node_modules)/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              import: [
                // path.resolve(__dirname, '../src/styles/mixins/index.styl')
              ]
            }
          }
        ]
      },
      {
        test: /\.(css|styl)$/,
        exclude: /(editorTheme|codemirror|potionsTheme|node_modules)/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '_[name]-[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              import: [
                path.resolve(__dirname, '../src/styles/mixins/index.styl')
              ]
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
}
