const history = require('connect-history-api-fallback')
const { config } = require('./_webpack')
const convert = require('koa-connect')
const serve = require('webpack-serve')
const path = require('path')

// NOTE: https://github.com/bripkens/connect-history-api-fallback#options
const historyOptions = {
	verbose: true,
	logger: console.log.bind(console),
	rewrites: [{ from: /\/$/, to: '/dist/index.html' }]
}

const add = (app, middleware, options) => {
	historyOptions |> history |> convert |> app.use
}

serve({
	add,
	config,
	port: 8080,
	open: false,
	http2: false,
	logLevel: 'debug',

	dev: {
		logLevel: 'debug',
		publicPath: '/dist'
	},

	hot: {
		hot: true
	}
})
