import { types } from 'mobx-state-tree'

import { OutputState } from './Output'
import { INFINITE_LOOP_DEFAULT_CONTENTS } from './consts'

const model = {
	contents: types.optional(types.string, '// placeholder'),
	output: types.optional(OutputState, {}),
	instructions: types.optional(types.string, '# no instructions')
}

const actions = self => {
	const history = []

	return {
		setContents(contents) {
			history.push[self.contents]
			self.contents = contents
		},

		undoSetContents() {
			self.setContents(history[history.length - 1])
		},

		redoSetContents() {
			self.setContents()
		},

		setInstructions(instructions) {
			self.instructions = instructions
		}
	}
}

const views = self => ({
	get characterCount() {
		return self.contents.length
	}
})

export default types
	.model(model)
	.actions(actions)
	.views(views)
