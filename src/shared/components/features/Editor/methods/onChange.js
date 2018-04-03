export const onChange = self => (value, event) => {
	self.setState(state => ({
		code: value
	}))

	self.props.onChange(value, event)
}
