import { types, flow } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import { EditorState } from './Editor'
import { LessonState } from './Lesson'
import { AuthState } from './Auth'

const modulePath = (username, id) => {
	return '$SERVER_ADDRESS$$API_PATH$/module/' + userName + '/' + id
}

const model = {
	editor: types.optional(EditorState, {}),
	lesson: types.optional(LessonState, {}),
	auth: types.optional(AuthState, {})
}

const actions = self => ({
	fetchModule: ({ userName, id }) =>
		flow(function*() {
			const response = yield fetch(modulePath(userName, id))
			const data = yield response.json()

			self.editor.setContents(data.module.editorContent)
			self.editor.setInstructions(data.module.lessonContent)
		})
})

const _model = types.model(model).actions(actions)

export default makeInspectable(_model.create({}))
