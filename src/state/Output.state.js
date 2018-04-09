import { types } from 'mobx-state-tree'
import uuid from 'uuid/v4'
import moment from 'moment'

const Log = types.model({
	uid: types.optional(types.string, () => uuid()),
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
	},

	addErrorLog(error) {
		self.logs.push({
			logType: 'ERROR',
			dataType: 'object',
			message: error
		})
	},

	addExecutionLog() {
		self.logs.push({
			logType: 'INFO',
			dataType: 'string',
			message: `[${moment().format('h:mm:ss')}] ececuting`
		})
	},

	addSocketDisconnectLog() {
		self.logs.push({
			logType: 'INFO',
			dataType: 'string',
			message: `[${moment().format('h:mm:ss')}] socket disconnected`
		})
	},

	addCustomLog(type, message) {
		self.logs.push({
			logType: type,
			dataType: 'string',
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
