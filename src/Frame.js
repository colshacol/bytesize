import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { ModuleScene } from '#scenes/ModuleScene'
import { TopBar } from '#components/common/TopBar'

export class Frame extends React.Component {
	render() {
		return (
			<>
				<TopBar />
				<Router>
					<>
						<Route exact path="/" component={ModuleScene} />
					</>
				</Router>
			</>
		)
	}
}
