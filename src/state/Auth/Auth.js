import { types } from 'mobx-state-tree'
import queryString from 'query-string'

import { UserState } from './User'
import { auth } from './auth0'

const model = {
	authenticated: types.optional(types.boolean, false),
	accessToken: types.optional(types.string, ''),
	expiresIn: types.optional(types.number, 0),
	idToken: types.optional(types.string, ''),
	state: types.optional(types.string, ''),
	tokenType: types.optional(types.string, ''),
	user: types.optional(UserState, {})
}

const actions = self => {
	return {
		afterCreate() {},

		logIn() {
			auth.logIn()
		},

		logOut() {
			auth.logOut()
		},

		handleAuth() {
			auth.auth0.parseHash((err, authResult) => {
				err ? console.log(err) : self.setAuth(authResult)
			})
		},

		setAuth(authData) {
			self.authenticated = true
			self.accessToken = authData.accessToken
			self.expiresIn = authData.expiresIn
			self.tokenType = authData.tokenType
			self.idToken = authData.idToken
			self.state = authData.state

			auth.setLocalStorageAuth(authData)
		}
	}
}

const views = self => {
	return {
		get isAuthenticated() {
			return self.authenticated
				? new Date().getTime() < JSON.parse(localStorage.getItem('expires_at'))
				: false
		}
	}
}

export default types
	.model(model)
	.actions(actions)
	.views(views)
