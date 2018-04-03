// NOTE: Handles messages from the socket server.
export const handleMessage = self => event => {
	const data = JSON.parse(event.data)

	if (data.stdout) {
		self.setOutput(data.stdout)
	}
}
