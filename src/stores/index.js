import shards from './shards'

const editorStore = shards.createStore('editor', {
	content: '//^^^^^^^66666',

	setContent(store, content) {
		store.content = content
	}
})

export { editorStore }
