import * as React from 'react'
import {
	BrowserRouter,
	Route,
	Link,
	Switch,
	withRouter
} from 'react-router-dom'

import { TopBar } from '#components/TopBar'
import { Splash } from '#components/Splash'
import { ModuleView } from '#components/ModuleView'
import shortId from 'shortid'
import { ShardsProvider } from '#stores/shards'
// import { EditorProvider } from '#stores/Editor'

import './App.css'
// import { ShardsProvider } from './utilities/Shards/index';

export class App extends React.Component {
	render() {
		return (
			<ShardsProvider>
				<div styleName="App" data-dark-theme>
					<Routing />
				</div>
			</ShardsProvider>
		)
	}
}

const Logger = (window.Logger = (props) => {
	console.log(props._name || 'Logger', ' ---> ', props)
	return null
})

console.log(ModuleView)

const Routing = (props) => {
	return (
		<BrowserRouter>
			<>
				<Route path="*" component={TopBar} />
				{/* <Logger _name="RouterLogger" /> */}
				<Switch>
					<Route exact path="/" component={Splash} />
					<Route
						exact
						path="/module/:userId/:moduleId"
						component={ModuleView}
					/>
				</Switch>
			</>
		</BrowserRouter>
	)
}
