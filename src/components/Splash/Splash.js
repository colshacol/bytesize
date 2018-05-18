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
  setEmailInputValue = methods.setEmailInputValue(this)
  handleEnterKey = methods.handleEnterKey(this)
  submitEmail = methods.submitEmail(this)

  state = {
    emailInputValue: locast.lastUser.email || ''
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
          onKeyPress={this.handleEnterKey}
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
