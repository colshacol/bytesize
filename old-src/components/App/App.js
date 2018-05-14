import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { AuthScene } from '#scenes/AuthScene'
import { ModuleScene } from '#scenes/ModuleScene'
import { HomeScene } from '#scenes/HomeScene'
import { DashboardScene } from '#scenes/DashboardScene'
import { TopBar } from '#components/TopBar'
import { MainState } from '#state'
import './App.css'

const selector = (stateTree) => {
  return {
    $auth: stateTree.state.auth
  }
}

export class App extends React.Component {
  render() {
    return (
      <Provider state={MainState}>
        <div styleName="App">
          <Routing />
        </div>
      </Provider>
    )
  }
}

const Routing = inject(selector)(
  observer((props) => {
    return (
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

            <Route
              exact
              path="/"
              render={() => {
                if (props.$auth.isAuthenticated) {
                  return <DashboardScene />
                } else {
                  return <HomeScene />
                }
              }}
            />
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
    )
  })
)
