import * as React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import './Authenticate.css'

@observer
export class Authenticate extends React.Component {
  @observable userName = ''
  @observable password0 = ''
  @observable password1 = ''

  @action
  setUserName = (event) => {
    this.userName = event.target.value
  }

  @action
  setPassword0 = (event) => {
    this.password0 = event.target.value
  }

  @action
  setPassword1 = (event) => {
    this.password1 = event.target.value
  }

  render() {
    return (
      <div styleName="Authenticate">
        <h1>Log In</h1>
        {/* <input
					styleName="input"
					placeholder="user name"
					value={this.userName}
					onChange={this.setUserName}
				/>
				<input
					styleName="input"
					type="password"
					placeholder="password"
					value={this.password0}
					onChange={this.setPassword0}
				/> */}
        <button styleName="submitButton" onClick={this.props.login}>
          Log In With Github
        </button>
      </div>
    )
  }
}
