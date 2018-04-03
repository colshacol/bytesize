export const componentDidMount = self => () => {
	const socket = new WebSocket('ws://localhost:8765/run')
	self.socket = socket

	socket.addEventListener('open', self.socketConnected)
	socket.addEventListener('message', self.socketMessage)
}
