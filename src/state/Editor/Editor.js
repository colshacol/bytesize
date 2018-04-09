import { types } from 'mobx-state-tree'

import { OutputState } from './Output'
import { INFINITE_LOOP_DEFAULT_CONTENTS } from './consts'

const model = {
	contents: types.optional(types.string, '// placeholder'),
	output: types.optional(OutputState, {}),
	instructions: types.optional(types.string, '# no instructions')
}

const actions = self => ({
	setContents(contents) {
		console.log('setting', { contents })
		self.contents = contents
	},

	setInstructions(instructions) {
		self.instructions = instructions
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
