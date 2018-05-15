import Shards from './shards'

const editorStore = {
  content: '//39393939393',

  setContent(store, content) {
    store.content = content
  }
}

const shards = new Shards({
  editorStore
})

console.log({ shards })

export default shards
