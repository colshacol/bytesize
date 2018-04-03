// TODO: Handle state in a way that it doesn't re-render
// the entire view. Like... with <Obersever>.
export const onChange = self => code => {
	self.setState(state => ({
		code
	}))
}
