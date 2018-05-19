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

export const submitRegistration = (self) => async (event) => {
  const { data, error } = await goGet.json(
    `${window.location.origin}/api/v0/users/create`,
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include',
      body: JSON.stringify({
        emailAddress: self.state.emailInputValue,
        password: self.state.passwordInputValue
      })
    }
  )

  locast.lastUserEmail = self.state.emailInputValue

  console.log({ data, error })

  const module = self.props.moduleStore.createModule(self.state.emailInputValue)
  self.props.history.push(`/module/${module.ownerEmail}/${module.sid}`)
}

export const handleEnterKey = (self) => (event) => {
  if (event.key === 'Enter') self.submitEmail()
}
