import { types, flow } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

const model = {
	auth: types.optional(types.boolean, false)
}

const actions = (self) => {
	return {}
}

const views = (self) => {
	return {}
}

export const MainState = makeInspectable(
	types
		.model(model)
		.actions(actions)
		.create({})
)
