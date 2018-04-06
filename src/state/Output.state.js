import { types } from 'mobx-state-tree'
import uuid from 'uuid/v4'

const Log = types.model({
	uid: types.optional(types.string, () => uuid()),
	type: types.string,
	value: types.string
})

const model = {
	logs: types.optional(types.array(Log), [])
}

const actions = self => ({
	addLog(log) {
		self.logs.push({
			type: 'STDOUT',
			value: log
		})
	},

	addInfoLog(log) {
		self.logs.push({
			type: 'INFO',
			value: log
		})
	}
})

const views = self => ({
	get logCount() {
		return self.logs.length
	}
})

export default types
	.model(model)
	.actions(actions)
	.views(views)
