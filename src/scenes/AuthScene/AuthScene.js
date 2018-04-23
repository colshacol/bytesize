import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { SideBar } from '#components/SideBar'
import { ContentSection } from '#components/ContentSection'

import './AuthScene.css'

const stateTreeSelector = tree => {
	return {
		$auth: tree.state.auth
	}
}

@inject(stateTreeSelector)
@observer
export class AuthScene extends React.Component {
	componentDidMount() {
		this.props.$auth.handleAuth()
		this.props.history.push('/dashboard')
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
