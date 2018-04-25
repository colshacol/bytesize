import { types } from 'mobx-state-tree'

import { INFINITE_LOOP_DEFAULT_CONTENT } from './consts'

const model = {
	content: types.optional(types.string, '// placeholder')
}

const actions = (self) => {
	const history = []

	return {
		setContent(content) {
			console.log({ content })
			self.content = content
		}
	}
}

const views = (self) => ({
	get characterCount() {
		return self.content.length
	}
})

export default types
	.model(model)
	.actions(actions)
	.views(views)
