import { types } from 'mobx-state-tree'
import uuid from 'uuid/v4'
import moment from 'moment'

const Log = types.model({
	uid: types.optional(types.string, () => uuid()),
	logType: types.string,
	message: types.frozen
})

const model = {
	logs: types.optional(types.array(Log), [])
}

const actions = self => ({
	addLog(log) {
		log.messages.forEach(message => {
			self.logs.push({
				logType: log.type,
				message: message
			})
		})
	},

	addInfoLog(log) {
		self.logs.push({
			logType: 'INFO',
			message: log
		})
	},

	addErrorLog(error) {
		self.logs.push({
			logType: 'ERROR',
			message: error
		})
	},

	addExecutionLog() {
		self.logs.push({
			logType: 'INFO',
			message: `[${moment().format('h:mm:ss')}] executing`
		})
	},

	addSocketNotConnectedLog() {
		self.logs.push({
			logType: 'WARNING',
			message: `[${moment().format('h:mm:ss')}] socket not connected`
		})
	},

	addSocketDisconnectLog() {
		self.logs.push({
			logType: 'WARNING',
			message: `[${moment().format('h:mm:ss')}] socket disconnected`
		})
	},

	addCustomLog(type, message) {
		self.logs.push({
			logType: type,
			message
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
