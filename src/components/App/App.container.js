import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Render } from './App.render'
import { ModuleScene } from '#scenes/ModuleScene'
import { TopBar } from '#components/TopBar'

export class Container extends React.Component {
	render = () => Render(this)
}
