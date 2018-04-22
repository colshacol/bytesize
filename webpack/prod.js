const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
	mode: 'development',
	entry: ['react-hot-loader/patch', './src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},

	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},

	devServer: {
		disableHostCheck: true,
		contentBase: path.join(__dirname, '../dist'),
		publicPath: '/',
		compress: true,
		port: 9000,
		hot: true
	},

	module: {
		rules: [
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
				test: /\.(css)$/,
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
						loader: 'stylus-loader'
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
						loader: 'stylus-loader'
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

	plugins: []
}
