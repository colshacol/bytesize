import auth0 from 'auth0-js'

class Auth {
	auth0 = new auth0.WebAuth({
		domain: 'bytesized.auth0.com',
		clientID: 'wt4u1X_a7fPOkQ_3RUDJoHdMvFSyOGPo',
		redirectUri: 'http://localhost:9000/authenticating',
		audience: 'https://bytesized.auth0.com/userinfo',
		responseType: 'token id_token',
		scope: 'openid profile'
	})

	logIn = () => {
		this.auth0.authorize()
	}

	logOut = () => {
		localStorage.removeItem('accessToken')
		localStorage.removeItem('idToken')
		localStorage.removeItem('expires_at')
		window.location.assign('/')
	}

	handleAuth = () => {
		return this.auth0.parseHash((err, authResult) => {
			return err ? { error: err } : authResult
		})
	}

	setLocalStorageAuth = authData => {
		localStorage.setItem('accessToken', authData.accessToken)
		localStorage.setItem('idToken', authData.idToken)
		localStorage.setItem('userData', authData.idTokenPayload)

		localStorage.setItem(
			'expires_at',
			JSON.stringify(authData.expiresIn * 1000 + new Date().getTime())
		)
	}
}

export const auth = new Auth()
