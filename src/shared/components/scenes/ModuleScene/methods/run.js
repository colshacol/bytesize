import moment from 'moment'

export const run = self => event => {
	self.setState(
		state => ({
			output: [
				...state.output,
				{
					type: 'BUILT_IN',
					value: `$ executing @ ${moment().format('h:mm:ss')}`
				}
			]
		}),
		self.socket.send(JSON.stringify({ code: self.state.code }))
	)
}
