import * as React from 'react'
import { withRouter } from 'react-router'

import * as methods from './methods'
import { Input } from '#components/Input'
import { inject, observer } from 'mobx-react'
import './Splash.css'

const selector = (tree) => {
  console.warn({ tree })
  return {
    moduleStore: tree.state.moduleStore
  }
}

@withRouter
@inject(selector)
@observer
export class Splash extends React.Component {
  setInputValue = methods.setInputValue(this)
  handleEnterKey = methods.handleEnterKey(this)
  submitRegistration = methods.submitRegistration(this)
  attemptLogin = methods.attemptLogin(this)
  handleLoginEnterKey = methods.handleLoginEnterKey(this)
  state = {
    emailInputValue: locast.lastUserEmail || '',
    passwordInputValue: '',
    usernameInputValue: ''
  }

  render() {
    const { props, state } = this
    console.log('<Splash>', { props, state })

    return (
      <div styleName="Splash">
        <h1 className="title">place some copy here</h1>

        <Input
          big
          value={state.usernameInutValue}
          onChange={this.setInputValue('username')}
          onKeyPress={this.handleEnterKey}
        />

        <Input
          big
          value={state.emailInputValue}
          onChange={this.setInputValue('email')}
          onKeyPress={this.handleEnterKey}
        />

        <Input
          big
          value={state.passwordInputValue}
          onChange={this.setInputValue('password')}
          onKeyPress={this.handleEnterKey}
        />

        {/* TODO: Style buttons and shit... */}
        <button onClick={this.submitRegistration}>submit</button>

        <h1>LOGIN FORM</h1>

        <Input
          big
          value={state.usernameInputValue}
          onChange={this.setInputValue('username')}
          onKeyPress={this.handleLoginEnterKey}
        />

        <Input
          big
          value={state.passwordInputValue}
          onChange={this.setInputValue('password')}
          onKeyPress={this.handleLoginEnterKey}
        />

        {/* TODO: Style buttons and shit... */}
        <button onClick={this.attemptLogin}>submit</button>

        <small styleName="emailPrompt">
          Enter your email to create a new module.
        </small>
      </div>
    )
  }
}
