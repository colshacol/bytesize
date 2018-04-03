import moment from 'moment'

// TODO: Move to own module.
const createBuiltInLog = value => {
	return {
		type: 'BUILT_IN',
		value
	}
}

// NOTE: Every time the user clicks "Run Code" a message
// will be added to the output console so that they can
// differentiate between executions.

export const run = self => event => {
	self.setState(
		state => ({
			output: [
				...state.output,
				createBuiltInLog(`$ executing @ ${moment().format('h:mm:ss')}`)
			]
		}),
		self.socket.send(JSON.stringify({ code: self.state.code }))
	)
}
