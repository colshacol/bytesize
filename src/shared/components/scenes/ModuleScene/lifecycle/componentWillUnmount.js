export const componentWillUnmount = self => () => {
	self.socket.close()
}
