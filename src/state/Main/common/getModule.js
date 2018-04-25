import { flow } from 'mobx-state-tree'
import * as utilities from '../utilities'

export const getModule = (self) =>
	flow(function*(options) {
		const response = yield fetch(utilities.modulePath(options))
		const data = yield response.json()

		console.log('getModule', { data })

		self.editor.setContent(data.module.editorContent)

		// self.editor.setContents(
		// 	.modules.filter((module) => {
		// 		return module.uid == id
		// 	})[0].editorContent
		// )
	})
