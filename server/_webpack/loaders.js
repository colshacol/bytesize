const path = require('path')

export const loaders = (env: string) => {
	return [
		{
			test: /\.js$/,
			loader: 'string-replace-loader',
			options: {
				// Fix these to be prettier.
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
					loader: 'stylus-loader',
					options: {
						import: []
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
							path.resolve(process.cwd(), 'src/styles/mixins/index.styl')
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
}
