import * as React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { SideBar } from '#components/SideBar'
import { ContentSection } from '#components/ContentSection'
import { Intro } from './Intro'
import { Authenticate } from './Authenticate'
import './HomeScene.css'

const selector = stateTree => {
	console.log({ stateTree })
	return {
		$auth: stateTree.state.auth
	}
}

@inject(selector)
@observer
export class HomeScene extends React.Component {
	render() {
		return (
			<main styleName="HomeScene">
				<SideBar>
					<Intro />
				</SideBar>
				<ContentSection>
					<Authenticate login={this.props.$auth.logIn} />
				</ContentSection>
			</main>
		)
	}
}
