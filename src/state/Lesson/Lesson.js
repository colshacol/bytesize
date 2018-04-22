import { types } from 'mobx-state-tree'
import { autorun } from 'mobx'
import uuid from 'uuid/v4'
import { Editor, EditorState } from 'draft-js'

const model = {
	uid: types.optional(types.string, () => uuid()),
	editing: types.optional(types.boolean, true),
	previewing: types.optional(types.boolean, false),
	editedContents: types.optional(types.string, () => '# hello'),
	contents: types.optional(types.string, () => '# hello')
}

const actions = self => {
	return {
		toggleEditing() {
			const editing = !self.editing

			self.editing = editing
			editing && (self.previewing = false)
		},

		togglePreviewing() {
			console.log('toggling preview', self.previewing)
			self.previewing = !self.previewing
		},

		setContents(contents) {
			self.editing
				? (self.editedContents = contents.markdown)
				: (self.contents = contents.markdown)
		},

		saveContents() {
			self.editing = false
			self.contents = self.editedContents
			// console.log('SAVED')
		}
	}
}

const views = self => {
	return {
		get markdown() {
			if (self.editing) {
				return self.editedContents
			}

			return self.contents
		}
	}
}

export const LessonState = types.model(model).actions(actions)
