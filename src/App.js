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
import shards from '#stores'
// import { EditorProvider } from '#stores/Editor'

import './App.css'
// import { ShardsProvider } from './utilities/Shards/index';

export class App extends React.Component {
  render() {
    return (
      <shards.provider>
        <div styleName="App" data-dark-theme>
          <Routing />
        </div>
      </shards.provider>
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
