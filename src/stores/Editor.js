// import { create } from '#utilities/Shards'
import shards from '#stores/shards'

const state = {
	content: '// write DAT CODE man'
}

const actions = {
	setContent(store, value) {
		store.content = value
	}
}

const EditorProvider = shards.create('editor', state, actions)
console.log(EditorProvider)
export { EditorProvider }
