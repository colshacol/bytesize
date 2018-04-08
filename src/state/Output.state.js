import { types } from 'mobx-state-tree'
import uuid from 'uuid/v4'

const Log = types.model({
	uid: types.optional(types.string, () => uuid()),
	// type: types.string,
	// messages: types.array(Message),
	logType: types.string,
	dataType: types.string,
	message: types.string
})

const model = {
	logs: types.optional(types.array(Log), [])
}

const actions = self => ({
	addLog(log) {
		log.messages.forEach(message => {
			self.logs.push({
				logType: log.type,
				dataType: message.type,
				message: message.value
			})
		})
	},

	addInfoLog(log) {
		self.logs.push({
			logType: 'INFO',
			dataType: 'string',
			message: log
		})
	}
})

const views = self => ({
	get logCount() {
		return self.logs.length
	},

	get textValue() {
		console.log(self.logs)
		return self.logs.reduce((final, log) => {
			final += `${log.value}\n`
			return final
		}, '')
	}
})

export default types
	.model(model)
	.actions(actions)
	.views(views)
