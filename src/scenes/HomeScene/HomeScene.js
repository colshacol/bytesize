import * as React from 'react'
import { Link } from 'react-router-dom'

import './HomeScene.css'

export class HomeScene extends React.Component {
	state = {
		data: null
	}

	componentDidMount() {
		fetch('$SERVER_ADDRESS$$API_PATH$/user/colshacol')
			.then(data => data.json())
			.then(json => {
				this.setState({ data: json })
				console.log('got json:', json)
			})
	}

	render() {
		return (
			this.state.data && (
				<main styleName="HomeScene">
					<div styleName="newModules">
						<div>User: {this.state.data.userName}</div>
						<For each="module" of={this.state.data.modules} index="index">
							<div key={module.uid}>
								<Link to={`/modules/${this.state.data.userName}/${module.uid}`}>
									{module.title}
								</Link>
							</div>
						</For>
					</div>
				</main>
			)
		)
	}
}
