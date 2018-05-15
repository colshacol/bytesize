export const setEmailInputValue = (self) => (event) => {
	event.persist()

	self.setState((state) => ({
		emailInputValue: event.target.value
	}))
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

	locast.lastUser = data.user
	locast.lastModule = data.module

	self.props.history.push(`/module/${data.user.email}/${data.module.sid}`)
}

export const handleEnterKey = (self) => (event) => {
	if (event.key === 'Enter') self.submitEmail()
}
