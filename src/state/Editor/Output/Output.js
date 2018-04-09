import { types } from 'mobx-state-tree'
import { autorun } from 'mobx'
import uuid from 'uuid/v4'
import moment from 'moment'
import { applyPatch } from 'mobx-state-tree'

const Log = types.model({
	uid: types.optional(types.string, () => uuid()),
	type: types.string,
	message: types.frozen
})

const model = {
	logs: types.optional(types.array(Log), [])
}

const actions = self => ({
	clearLogs() {
		self.logs.forEach(log => self.logs.pop())
	},

	afterCreate() {
		autorun(() => {
			if (self.logs.length > 35) {
				self.logs.shift()
			}
		})
	},

	updateLogs(newLogs) {
		newLogs.forEach(log => {
			log.messages.forEach(message => {
				self.logs.push({
					type: log.type,
					message: message
				})
			})
		})
	},

	removeOldestLog() {
		if (self.logs.length > 50) {
			self.logs.shift()
		}
	},

	addLog(log) {
		log.messages.forEach(message => {
			self.logs.push({
				type: log.type,
				message: message
			})
		})
	},

	addInfoLog(log) {
		self.logs.push({
			type: 'INFO',
			message: log
		})
	},

	addErrorLog(error) {
		self.logs.push({
			type: 'ERROR',
			message: error
		})
	},

	addExecutionLog() {
		self.logs.push({
			type: 'INFO',
			message: `[${moment().format('h:mm:ss')}] executing`
		})
	},

	addSocketNotConnectedLog() {
		self.logs.push({
			type: 'WARNING',
			message: `[${moment().format('h:mm:ss')}] socket not connected`
		})
	},

	addSocketDisconnectLog() {
		self.logs.push({
			type: 'WARNING',
			message: `[${moment().format('h:mm:ss')}] socket disconnected`
		})
	},

	addCustomLog(type, message) {
		self.logs.push({
			type: type,
			message
		})
	}
})

const views = self => ({
	get logCount() {
		return self.logs.length
	},

	get textValue() {
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
