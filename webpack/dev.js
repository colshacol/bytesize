const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
require('dotenv').config()

console.log(path.resolve(__dirname, '../src/styles/mixins/index.styl'))

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	entry: ['react-hot-loader/patch', './src/index.js'],

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
		historyApiFallback: true
		// 	after(app) {
		// 		app.get('*', function(req, res) {
		// 			if (req.path.includes('bundle.js')) {
		// 				return res.redirect('http://localhost:9000/webpack-dev-server/bundle.js')
		// 			}
		// 			if (req.path.includes('.css')) {
		// 				const _path = req.path.replace('/modules/colshacol/', './')
		// 				console.log({ _path })
		// 				return res.sendFile(_path, { root: './dist' })
		// 			}
		// 			res.redirect('/')
		// 			console.log(req.path)
		// 			res.sendFile('./index.html', { root: `./dist` })
		// 		})
		// 	}
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
				include: /(potionsTheme|node_modules)/,
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
				exclude: /(potionsTheme|node_modules)/,
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

	plugins: [new webpack.HotModuleReplacementPlugin()]
}
