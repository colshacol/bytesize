export const setOutput = self => output => {
	self.setState(state => ({
		output: [...state.output, output]
	}))
}
