import { types } from 'mobx-state-tree'
import queryString from 'query-string'

const model = {
	editorContent: types.optional(types.string, ''),
	lessonContent: types.optional(types.string, ''),
	title: types.optional(types.string, ''),
	uid: types.optional(types.number, 0),
	_id: types.optional(types.string, '')
}

const actions = (self) => {
	return {}
}

const views = (self) => {
	return {}
}

export default types
	.model(model)
	.actions(actions)
	.views(views)
