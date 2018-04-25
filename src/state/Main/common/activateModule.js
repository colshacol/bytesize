import { flow } from 'mobx-state-tree'
import * as utilities from '../utilities'

export const activateModule = (self) =>
	flow(function*(options) {
		const response = yield fetch(utilities.modulePath(options))
		const data = yield response.json()

		console.log('activateModule', { data })

		self.editor.setContent(data.module.editorContent)
		self.lesson.setContent(data.module.lessonContent)
	})
