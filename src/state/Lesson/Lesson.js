import { types } from 'mobx-state-tree'
import { autorun } from 'mobx'
import uuid from 'uuid/v4'
import { Editor, EditorState } from 'draft-js'

const model = {
	uid: types.optional(types.string, () => uuid()),
	editing: types.optional(types.boolean, true),
	previewing: types.optional(types.boolean, false),
	editedContents: types.optional(types.string, () => '#hooooo'),
	contents: types.optional(types.string, () => '#hello')
}

const actions = self => {
	let editorState = {
		markdown: '',
		html: ''
	}

	return {
		toggleEditing() {
			self.editing = !self.editing
			!self.editing && (self.previewing = false)
		},

		s() {
			return editorState
		},

		togglePreviewing() {
			self.previewing = !self.previewing
		},

		setContents(contents) {
			console.log('setting contents', contents)
			editorState = contents
			self.contents = contents.markdown
		},

		saveContents() {
			console.log('SAVED')
		}
	}
}

export const LessonState = types.model(model).actions(actions)
