import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { AuthScene } from '#scenes/AuthScene'
import { ModuleScene } from '#scenes/ModuleScene'
import { HomeScene } from '#scenes/HomeScene'
import { DashboardScene } from '#scenes/DashboardScene'
import { TopBar } from '#components/TopBar'
import { StateTree } from '#state'
import './App.css'

export class App extends React.Component {
	render() {
		return (
			<Provider state={StateTree}>
				<div styleName="App">
					<Router>
						<>
							<TopBar />
							<Switch>
								<Route
									exact
									path="/modules/:userName/:id"
									component={ModuleScene}
								/>

								<Route exact path="/authenticating" component={AuthScene} />

								<Route exact path="/dashboard" component={DashboardScene} />

								<Route exact path="/" component={HomeScene} />
								<Route
									path="*"
									render={({ history }) => (
										<button
											type="button"
											onClick={() => {
												history.push('/new-location')
											}}
										>
											Click Me!
										</button>
									)}
								/>
							</Switch>
						</>
					</Router>
				</div>
			</Provider>
		)
	}
}
