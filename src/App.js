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
import { Provider } from 'mobx-react'
import rootStore from '#state'
import { hot } from 'react-hot-loader'

import './App.css'

export class App extends React.Component {
  componentDidCatch(error, info) {
    console.warn(info)
    console.warn(error)
  }

  render() {
    return (
      <Provider state={rootStore}>
        <div styleName="App" data-dark-theme>
          <Routing />
        </div>
      </Provider>
    )
  }
}

export default hot(module)(App)

const Logger = (window.Logger = (props) => {
  console.log(props._name || 'Logger', ' ---> ', props)
  return null
})

const Routing = (props) => {
  console.log({ Splash })
  return (
    <BrowserRouter>
      <>
        <Route path="*" component={TopBar} />
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
