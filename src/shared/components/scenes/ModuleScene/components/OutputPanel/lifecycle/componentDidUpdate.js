export const componentDidUpdate = self => prevProps => {
	// TODO: Add condition to maintain scroll position if the user
	// has manually scrolled from the bottom.

	prevProps.output.length < self.props.output.length &&
		(self.scrollBox.current.scrollTop = 9999)
}
