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

	const valueObject = arg => {
		const type = typeOf(arg)
		return {
			type,
			value: type === 'undefined' ? 'undefined' : JSON.stringify(arg)
		}
	}

	vm.on('console.log', (...args) => {
		const messages = args.map(valueObject)
		socket.send(JSON.stringify({ type: 'STDOUT', messages }))
	})

	vm.on('console.info', (...args) => {
		const messages = args.map(valueObject)
		socket.send(JSON.stringify({ type: 'STDOUT', messages }))
	})

	vm.on('console.error', (...args) => {
		const messages = args.map(valueObject)
		socket.send(JSON.stringify({ type: 'STDERR', messages }))
	})

	vm.on('console.trace', (...args) => {
		const messages = args.map(valueObject)
		socket.send(JSON.stringify({ type: 'TRACE', messages }))
	})

	vm.on('console.dir', (...args) => {
		args.forEach(arg => {
			socket.send(JSON.stringify({ type: 'STDOUT', value: args }))
		})
	})

	vm.on('uncaughtException', err => {
		socket.send(JSON.stringify({ stderr: err }))
	})

	return vm
}
