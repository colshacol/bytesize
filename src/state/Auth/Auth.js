import { types, flow, getParent } from 'mobx-state-tree'
import queryString from 'query-string'

import { auth } from './auth0'

const model = {
	authenticated: types.optional(types.boolean, false),
	accessToken: types.optional(types.string, ''),
	expiresIn: types.optional(types.number, 0),
	idToken: types.optional(types.string, ''),
	state: types.optional(types.string, ''),
	tokenType: types.optional(types.string, '')
}

const actions = (self) => {
	return {
		logIn() {
			auth.logIn()
		},

		logOut() {
			auth.logOut()
		},

		setAuthData(authData, user) {
			self.authenticated = true
			self.accessToken = authData.accessToken
			self.expiresIn = authData.expiresIn
			self.tokenType = authData.tokenType
			self.idToken = authData.idToken
			self.state = authData.state

			auth.setLocalStorageAuth(authData)
			getParent(self, 1).user.setData(user)
		}
	}
}

const views = (self) => {
	return {
		get isAuthenticated() {
			return self.authenticated
				? new Date().getTime() < JSON.parse(localStorage.getItem('expires_at'))
				: false
		},

		get auth0() {
			return auth
		}
	}
}

export default types
	.model(model)
	.actions(actions)
	.views(views)
