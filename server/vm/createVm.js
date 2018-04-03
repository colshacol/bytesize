const { NodeVM } = require('vm2')

module.exports.createVm = () =>
	new NodeVM({
		console: 'redirect',
		sandbox: {},
		wrapper: 'commonjs',
		require: {
			external: true,
			builtin: [],
			root: './',
			mock: {
				fs: {
					readFileSync() {
						return 'DONT DO THAT'
					}
				}
			}
		}
	})
