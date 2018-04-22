import { types } from 'mobx-state-tree'
import queryString from 'query-string'

const model = {
	access_token: types.optional(types.string, ''),
	expires_in: types.optional(types.string, ''),
	id_token: types.optional(types.string, ''),
	state: types.optional(types.string, ''),
	token_type: types.optional(types.string, '')
}

const actions = self => {
	return {
		setAuth(authString: string) {
			const auth = queryString.parse(authString)
			self.access_token = auth.access_token
			self.expires_in = auth.expires_in
			self.token_type = auth.token_type
			self.id_token = auth.id_token
			self.state = auth.state
		}
	}
}

const views = self => {
	return {}
}

export default types
	.model(model)
	.actions(actions)
	.views(views)
