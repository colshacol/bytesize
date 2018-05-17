import Shards from './shards'

const LESSON_DEFAULT_CONTENT =
  "# Howdy, fucker.\n\n- a\n- b\n\n# How are you?\n\n_lolll fuck you_\n\n*fuck yourself*\n  \n```js\nconsole.log('up your ass')\n\nfunction doGood(name) {\n\treturn `${name} should do good.`;\n}\n```\n\n# You doing good?\n\n# Hows the family?\n"

// NOTE: Global state because it may be re-used
// in multiple places.
const editorStore = {
  editedContent: '// loading code...',
  content: '// loading code...',

  setContent(store, content) {
    store.content = content
  },

  inheritContent(store, module) {
    store.content = module.editorContent
    store.editedContent = module.editorContent
  }
}

// NOTE: Global state because it may be re-used
// in multiple places.
const lessonStore = {
  editedContent: LESSON_DEFAULT_CONTENT,
  content: LESSON_DEFAULT_CONTENT,
  editing: false,

  setContent(store, content) {
    store.content = content
  },

  setEditedContent(store, content) {
    store.editedContent = content
  },

  toggleEditing(store) {
    store.editing = !store.editing
  },

  saveEditedContent(store) {
    store.content = store.editedContent
    store.toggleEditing()
  },

  cancelEditedContent(store) {
    store.editedContent = store.content
    store.toggleEditing()
  },

  inheritContent(store, module) {
    store.content = module.lessonContent
    store.editedContent = module.lessonContent
    store.editing = false
  }
}

const shards = new Shards({
  editorStore,
  lessonStore
})

console.log({ shards })

export default shards
