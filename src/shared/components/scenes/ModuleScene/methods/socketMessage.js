export const socketMessage = self => event => {
	const data = JSON.parse(event.data)

	if (data.stdout) {
		self.setOutput(data.stdout)
	}
}
