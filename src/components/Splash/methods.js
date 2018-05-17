export const setEmailInputValue = (self) => (event) => {
	event.persist()

	self.setState((state) => ({
		emailInputValue: event.target.value
	}))
}

const setLocalStorageValues = (user, module) => {
	locast.lastUser = user
	locast.lastModule = module
}

export const submitEmail = (self) => async (event) => {
	const { data, error } = await goGet.json('<API>/createNewModule', {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({
			email: self.state.emailInputValue
		})
	})

	// TODO: Don't break. Just alert user of error.
	error && throw new Error(error)
	setLocalStorageValues(data.user, data.module)

	self.props.history.push(`/module/${data.user.email}/${data.module.sid}`)
}

export const handleEnterKey = (self) => (event) => {
	if (event.key === 'Enter') self.submitEmail()
}
