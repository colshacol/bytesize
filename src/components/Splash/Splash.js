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
    emailInputValue: localStorage.getItem('user.email') || '',
    passwordInputValue: '',
    usernameInputValue: localStorage.getItem('user.userName') || ''
  }

  componentWillMount() {
    localStorage.getItem('user.authenticated') &&
      this.props.history.push(localStorage.getItem('history.lastModulePath'))
  }

  componentDidCatch(error, info) {
    console.warn(info)
    console.warn(error)
  }

  render() {
    const { props, state } = this

    return (
      <div styleName="Splash">
        <h1 styleName="title">
          sometimes, all you need is a <span styleName="boldWord">module</span>
        </h1>

        <p>
          bytesized allows you to create and share tiny, executable JavaScript
          lessons
        </p>

        <div styleName="loginAndFeatures">
          <div styleName="login">
            <Input
              big
              value={state.usernameInutValue}
              placeholder="username"
              onChange={this.setInputValue('username')}
              onKeyPress={this.handleEnterKey}
            />

            <Input
              big
              value={state.emailInputValue}
              placeholder="email address"
              onChange={this.setInputValue('email')}
              onKeyPress={this.handleEnterKey}
            />

            <Input
              big
              value={state.passwordInputValue}
              placeholder="password"
              onChange={this.setInputValue('password')}
              onKeyPress={this.handleEnterKey}
              type="password"
            />

            {/* TODO: Style buttons and shit... */}
            <button onClick={this.submitRegistration}>Sign Up</button>
          </div>
          {/* <div styleName="features">cool features</div> */}
        </div>

        {/* <h1>LOGIN FORM</h1> */}

        {/* <Input
          big
          value={state.usernameInputValue}
          onChange={this.setInputValue('username')}
          onKeyPress={this.handleLoginEnterKey}
        /> */}

        {/* <Input
          big
          value={state.passwordInputValue}
          onChange={this.setInputValue('password')}
          onKeyPress={this.handleLoginEnterKey}
        /> */}

        {/* TODO: Style buttons and shit... */}
        {/* <button onClick={this.attemptLogin}>submit</button> */}

        {/* <small styleName="emailPrompt">
          Enter your email to create a new module.
        </small> */}
      </div>
    )
  }
}
