import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { ModuleScene } from '#scenes/ModuleScene'
import { HomeScene } from '#scenes/HomeScene'
import { TopBar } from '#components/TopBar'
import { StateTree } from '#state'

import './App.css'

export class App extends React.Component {
	render() {
		return (
			<Provider state={StateTree}>
				<div styleName="App">
					<TopBar />
					<Router>
						<>
							<Route exact path="/modules/:userName/:id" component={ModuleScene} />
							<Route exact path="/" component={HomeScene} />
						</>
					</Router>
				</div>
			</Provider>
		)
	}
}
