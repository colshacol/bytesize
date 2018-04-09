import { types, flow } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'
import regeneratorRuntime from 'regenerator-runtime'

import { EditorState } from './Editor'

const model = {
	editor: types.optional(EditorState, {})
}

const actions = self => ({
	fetchModule: flow(function*(userName, id) {
		const response = yield fetch('http://localhost:8765/api/v0/module/' + userName + '/' + id)
		const data = yield response.json()

		console.log({ data })
		self.editor.setContents(data.module.editorContent)
		self.editor.setInstructions(data.module.lessonContent)
	})
})

const _model = types.model(model).actions(actions)

export default makeInspectable(_model.create({}))
