import { types } from 'mobx-state-tree'
import { autorun } from 'mobx'
import uuid from 'uuid/v4'
import { Editor, EditorState } from 'draft-js'

const model = {
	uid: types.optional(types.string, () => uuid()),
	editing: types.optional(types.boolean, true),
	previewing: types.optional(types.boolean, false),
	editedContent: types.optional(types.string, () => '# hello'),
	content: types.optional(types.string, () => '# hello')
}

const actions = (self) => {
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

		setContent(content) {
			self.editing
				? (self.editedContent = content.markdown)
				: (self.content = content.markdown)
		},

		saveContent() {
			self.editing = false
			self.content = self.editedContent
			// console.log('SAVED')
		}
	}
}

const views = (self) => {
	return {
		get markdown() {
			if (self.editing) {
				return self.editedContent
			}

			return self.content
		}
	}
}

export const LessonState = types.model(model).actions(actions)
