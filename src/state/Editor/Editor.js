import { types } from 'mobx-state-tree'

import { OutputState } from './Output'
import { INFINITE_LOOP_DEFAULT_CONTENTS } from './consts'

const model = {
	contents: types.optional(types.string, INFINITE_LOOP_DEFAULT_CONTENTS),
	output: types.optional(OutputState, {})
}

const actions = self => ({
	setContents(contents) {
		self.contents = contents
	}
})

const views = self => ({
	get characterCount() {
		return self.contents.length
	}
})

export default types
	.model(model)
	.actions(actions)
	.views(views)
