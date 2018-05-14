import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { SideBar } from '#components/SideBar'
import { ContentSection } from '#components/ContentSection'

import './AuthScene.css'

const stateTreeSelector = (tree) => {
  return {
    $auth: tree.state.auth
  }
}

@inject(stateTreeSelector)
@observer
export class AuthScene extends React.Component {
  async componentDidMount() {
    // const done = await this.props.$auth.handleAuth()
    const auth = this.props.$auth.auth0

    auth.auth0.parseHash(async (err, authResult) => {
      if (err) reject(err)

      const response = await fetch(
        `$SERVER_ADDRESS$$API_PATH$/users/${authResult.idTokenPayload.nickname}`
      )

      const user = await response.json()
      console.log({ user })
      this.props.$auth.setAuthData(authResult, user)
      // this.props.$auth.setUserData(user)
      this.props.history.push('/dashboard')
    })
  }

  render() {
    return (
      <main styleName="AuthScene">
        <SideBar>wait a mment</SideBar>
        <ContentSection>were authing</ContentSection>
      </main>
    )
  }
}
