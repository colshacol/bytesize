import { types, getParent } from 'mobx-state-tree'
import { autorun } from 'mobx'
import uuid from 'uuid/v4'
import { Editor, EditorState } from 'draft-js'

const model = {
  uid: types.optional(types.string, () => uuid()),
  moduleUid: types.optional(types.string, '0'),
  editing: types.optional(types.boolean, false),
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
      self.previewing = !self.previewing
    },

    setContent(content) {
      self.editing
        ? (self.editedContent = content.markdown)
        : (self.content = content.markdown)
    },

    setModuleUid(uid) {
      console.log('setting module uid', uid)
      self.moduleUid = String(uid)
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
      return self.editing ? self.editedContent : self.content
    },

    // TODO: Figure out why this won't work as a view.
    isEditableByUser() {
      return getParent(self, 1).user.modules.some((module) => {
        return module.uid == self.moduleUid
      })
      // return JSON.parse(localStorage.getItem('userData')).uid
    }
  }
}

export const LessonState = types
  .model(model)
  .actions(actions)
  .views(views)
