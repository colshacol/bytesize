import { types } from 'mobx-state-tree'

const model = {
	nickname: types.optional(types.string, ''),
	name: types.optional(types.string, ''),
	picture: types.optional(types.string, ''),
	updated_at: types.optional(types.string, ''),
	iss: types.optional(types.string, ''),
	sub: types.optional(types.string, ''),
	aud: types.optional(types.string, ''),
	iat: types.optional(types.number, 0),
	exp: types.optional(types.number, 0),
	at_hash: types.optional(types.string, ''),
	nonce: types.optional(types.string, '')
}

const actions = self => {
	return {}
}

const views = self => {
	return {}
}

export default types
	.model(model)
	.actions(actions)
	.views(views)
