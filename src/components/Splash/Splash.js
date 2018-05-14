import * as React from 'react'
import { withRouter } from 'react-router'

import { Input } from '#components/Input'
import './Splash.css'

const setEmailInputValue = (self) => (event) => {
	event.persist()

	self.setState((state) => ({
		emailInputValue: event.target.value
	}))
}

const submitEmail = (self) => async (event) => {
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

@withRouter
export class Splash extends React.Component {
	setEmailInputValue = setEmailInputValue(this)
	submitEmail = submitEmail(this)

	state = {
		emailInputValue: ''
	}

	render() {
		const { props, state } = this
		return (
			<div styleName="Splash">
				<h1 className="title">Create Micro Code Lessons.</h1>

				<Input
					big
					value={state.emailInputValue}
					onChange={this.setEmailInputValue}
					rightButton={{
						onClick: this.submitEmail,
						text: 'create'
					}}
				/>

				<small styleName="emailPrompt">
					Enter your email to create a new module.
				</small>
			</div>
		)
	}
}
