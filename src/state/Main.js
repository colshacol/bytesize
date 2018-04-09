import { types } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import { EditorState } from './Editor'

const model = types.model({
	editor: types.optional(EditorState, {})
})

export default makeInspectable(model.create({}))