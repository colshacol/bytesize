import { types } from 'mobx-state-tree'
import { autorun } from 'mobx'
import uuid from 'uuid/v4'

export const Log = types.model({
	uid: types.optional(types.string, () => uuid()),
	type: types.string,
	message: types.frozen
})
