import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { TopBar } from '#components/TopBar'
import { MainState } from '#state'

import { Home } from '#scenes/Home'
import * as LessonViews from '#scenes/Lesson'
import * as $ from './styled'

const selector = (stateTree) => {
	return {
		$auth: stateTree.state.auth
	}
}

export class App extends React.Component {
	render() {
		return (
			<Provider state={MainState}>
				<$.container>
					<Routing />
				</$.container>
			</Provider>
		)
	}
}

const Routing = inject(selector)(
	observer((props) => {
		return (
			<Router>
				<>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/lessons/new" component={LessonViews.New} />
						<Route
							exact
							path="/lessons/:username/:uid"
							component={LessonViews.Lesson}
						/>
					</Switch>
				</>
			</Router>
		)
	})
)
