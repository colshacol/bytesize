import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { ModuleScene } from '#scenes/ModuleScene'
import { TopBar } from '#components/TopBar'
import { StateTree } from '#state'

import './App.styles.css'

export const Render = self => {
	return (
		<Provider state={StateTree}>
			<div styleName="App">
				<TopBar />
				<Router>
					<>
						<Route exact path="/" component={ModuleScene} />
					</>
				</Router>
			</div>
		</Provider>
	)
}