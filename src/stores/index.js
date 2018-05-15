import Shards from './shards'

const editorStore = {
  content: '//39393939393',

  setContent(store, content) {
    store.content = content
  }
}

const lessonStore = {
  content: '# Howdy, fucker.',
  editing: false,

  setContent(store, content) {
    store.content = content
  },

  toggleEditing(store) {
    store.editing = !store.editing
  }
}

const shards = new Shards({
  editorStore,
  lessonStore
})

console.log({ shards })

export default shards
