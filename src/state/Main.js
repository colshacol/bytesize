import { types, flow } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import { EditorState } from './Editor'
import { LessonState } from './Lesson'

const model = {
	editor: types.optional(EditorState, {}),
	lesson: types.optional(LessonState, {})
}

const actions = self => ({
	fetchModule: flow(function*(userName, id) {
		const response = yield fetch(
			'$SERVER_ADDRESS$$API_PATH$/module/' + userName + '/' + id
		)
		const data = yield response.json()

		// console.log({ data })
		self.editor.setContents(data.module.editorContent)
		self.editor.setInstructions(data.module.lessonContent)
	})
})

const _model = types.model(model).actions(actions)

export default makeInspectable(_model.create({}))
