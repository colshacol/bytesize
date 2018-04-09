export const createSocket = self => {
	let socket = new WebSocket('ws://localhost:8765/run')

	socket.addEventListener('open', event => {
		console.log('socket "/run": connected')
	})

	socket.addEventListener('close', event => {
		self.props.$output.addSocketDisconnectLog()
		console.log('socket "/run": disconnected')
	})

	let timeout = null
	const cache = []

	const handleLog = log => {
		timeout && (clearTimeout(timeout), console.log('clearing timeout'))
		cache.push(log)

		return new Promise((resolve, reject) => {
			timeout = setTimeout(() => {
				console.log('done with timeout')
				resolve(cache)
			}, 350)
		})
	}

	socket.addEventListener('message', event => {
		const data = JSON.parse(event.data)
		handleLog(data).then(cache => self.props.$output.updateLogs(cache))
	})

	return {
		close() {
			socket.close()
		},

		execute() {
			self.props.$output.addExecutionLog()

			if (socket.readyState === 3) {
				try {
					socket = new WebSocket('ws://localhost:8765/run')
					socket.send(JSON.stringify({ code: self.props.$editor.contents }))
				} catch (error) {
					self.props.$output.addSocketNotConnectedLog()
					self.props.$output.addErrorLog(JSON.stringify(error))
				}
			} else {
				socket.send(JSON.stringify({ code: self.props.$editor.contents }))
			}
		}
	}
}
