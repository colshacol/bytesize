const intercept = require('intercept-stdout')
const { createVm } = require('./vm')

module.exports.run = (code, ws) => {
	const vm = createVm()

	vm.on('console.log', (...args) => {
		args.forEach(arg => {
			ws.send(JSON.stringify({ stdout: arg }))
		})
	})

	return new Promise((resolve, reject) => {
		try {
			vm.run(code)
			resolve()
		} catch (error) {
			reject(error)
		}
	})
}
