import { types } from 'mobx-state-tree'

const Log = types.model({
	type: types.string,
	value: types.string
})

const model = {
	logs: types.optional(types.array(Log), [])
}

const actions = self => ({
	addLog(log) {
		console.log('addLog:', { log })
		self.logs.push(log)
	},

	addInfoLog(value) {
		return {
			type: 'BUILT_IN',
			value
		}
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
