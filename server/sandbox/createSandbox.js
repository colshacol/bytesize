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

	const typeOf = target => {
		if (Array.isArray(target)) {
			return 'array'
		} else if (String(target) === 'null') {
			return 'null'
		} else if (String(target) === 'undefined') {
			return 'undefined'
		} else {
			return typeof target
		}
	}

	vm.on('console.log', (...args) => {
		socket.send(JSON.stringify({ type: 'STDOUT', messages: args }))
	})

	vm.on('console.info', (...args) => {
		socket.send(JSON.stringify({ type: 'STDOUT', messages: args }))
	})

	vm.on('console.error', (...args) => {
		socket.send(JSON.stringify({ type: 'STDERR', messages: args }))
	})

	vm.on('console.trace', (...args) => {
		socket.send(JSON.stringify({ type: 'TRACE', messages: args }))
	})

	vm.on('console.dir', (...args) => {
		args.forEach(arg => {
			socket.send(JSON.stringify({ type: 'STDOUT', value: args }))
		})
	})

	vm.on('uncaughtException', err => {
		// console.log({ messages, t: typeof err })
		socket.send(
			JSON.stringify({
				type: 'STDERR',
				messages: [
					{
						type: 'string',
						value: err
					}
				]
			})
		)
	})

	return vm
}
