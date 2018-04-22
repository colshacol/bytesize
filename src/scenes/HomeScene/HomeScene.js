import * as React from 'react'
import { Link } from 'react-router-dom'

import { SideBar } from '#components/SideBar'
import { ContentSection } from '#components/ContentSection'
import { Intro } from './Intro'
import { Authenticate } from './Authenticate'
import { Auth } from '#utilities/Auth'
import './HomeScene.css'

export class HomeScene extends React.Component {
	state = {
		data: null
	}

	componentDidMount() {
		// TODO: Send to API utilities.
		// fetch('$SERVER_ADDRESS$$API_PATH$/user/colshacol')
		// 	.then(data => data.json())
		// 	.then(json => {
		// 		this.setState({ data: json })
		// 		// console.log('got json:', json)
		// 	})
	}

	login = () => {
		const auth = new Auth()
		auth.login()
	}

	render() {
		return (
			<main styleName="HomeScene">
				<SideBar>
					<Intro />
				</SideBar>
				<ContentSection>
					<Authenticate login={this.login} />
				</ContentSection>
			</main>
		)
	}
}
