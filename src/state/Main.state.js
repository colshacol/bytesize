import { types } from 'mobx-state-tree'

import EditorState from './Editor.state'

const model = types.model({
	editor: types.optional(EditorState, {})
})

export default model.create({})
