import * as React from 'react'
import { Provider } from 'mobx-react'

import { Frame } from './Frame'

import './shared/styles/index.css'

export class App extends React.Component {
	render() {
		return (
			<Provider store={{ name: 'Danny' }}>
				<Frame />
			</Provider>
		)
	}
}
