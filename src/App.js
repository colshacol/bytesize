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
// import { EditorProvider } from '#stores/Editor'

import './App.css'
// import { ShardsProvider } from './utilities/Shards/index';

export class App extends React.Component {
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

const Logger = (window.Logger = (props) => {
  console.log(props._name || 'Logger', ' ---> ', props)
  return null
})

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
