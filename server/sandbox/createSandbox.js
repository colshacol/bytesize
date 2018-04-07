const { NodeVM } = require('vm2')

export const createSandbox = socket => {
	const vm = new NodeVM({
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

	vm.on('console.log', (...args) => {
		args.forEach(arg => {
			socket.send(JSON.stringify({ stdout: arg }))
		})
	})

	vm.on('uncaughtException', err => {
		console.error('Asynchronous error caught.', err)
		socket.send(JSON.stringify({ stderr: err }))
	})

	return vm
}
