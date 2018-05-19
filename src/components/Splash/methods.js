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

  registration.error && handleRegistrationError(self)(registration)

  // NOTE: If successful, set email in localStorage.
  !registration.error && (locast.lastUserEmail = self.state.emailInputValue)

  console.warn(registration)

  // TODO: Offload module creation to the server.
  // NOTE: Currently doesn't give a fuck what the server sends.
  const module = self.props.moduleStore.createModule(self.state.emailInputValue)
  self.props.history.push(`/module/${module.ownerEmail}/${module.sid}`)
}

export const handleEnterKey = (self) => (event) => {
  if (event.key === 'Enter') self.submitEmail()
}
