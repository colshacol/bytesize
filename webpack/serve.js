const config = require('./dev')

module.exports = {
	...config,
	serve: {
		hot: {
			host: 'localhost',
			hot: true
		},
		reload: true,
		logTime: true,
		content: './code/client/dist'
	}
}
