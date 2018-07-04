// TODO: Separate registration and module creation.

export const setInputValue = (self) => (which) => (event) => {
  event.persist()

  self.setState((state) => ({
    [`${which}InputValue`]: event.target.value
  }))
}

const setLocalStorageValues = (user, module) => {
  locast.lastUser = user
  locast.lastModule = module
}

const handleRegistrationError = (self) => (registration) => {
  // TODO: Handle error.
  console.error(`Got an error. ¯\_(ツ)_/¯`, registration.error)
}

export const submitRegistration = (self) => async (event) => {
  const registration = await goGet.json(
    `${window.location.origin}/api/v0/users/create`,
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include',
      body: JSON.stringify({
        emailAddress: self.state.emailInputValue,
        password: self.state.passwordInputValue,
        username: self.state.usernameInputValue
      })
    }
  )

  console.warn({ registration })
  registration.data.error && handleRegistrationError(self)(registration)

  // NOTE: If successful, set email in localStorage.
  if (!registration.data.error) {
    localStorage.setItem('user.email', self.state.emailInputValue)
    localStorage.setItem('user.userName', self.state.usernameInputValue)
    localStorage.setItem('user.authenticated', true)
  }

  // TODO: Offload module creation to the server.
  // NOTE: Currently doesn't give a fuck what the server sends.
  const module = self.props.moduleStore.createModule(self.state.emailInputValue)
  self.props.history.push(
    `/module/${self.state.usernameInputValue}/${module.sid}`
  )
}

export const handleEnterKey = (self) => (event) => {
  event.key === 'Enter' && self.attemptLogin()
}

export const handleLoginEnterKey = (self) => (event) => {
  event.key === 'Enter' && self.attemptLogin()
}

export const attemptLogin = (self) => async (event) => {
  const login = await goGet.json(
    `${window.location.origin}/api/v0/users/login`,
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include',
      body: JSON.stringify({
        password: self.state.passwordInputValue,
        username: self.state.usernameInputValue
      })
    }
  )
}
