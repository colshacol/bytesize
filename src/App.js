import * as React from 'react'
import { Provider } from 'mobx-react'

import { Frame } from './Frame'

import './shared/styles/index.css'

// NOTE: store in Provider is just a placeholder for now.

export class App extends React.Component {
	render() {
		return (
			<Provider store={{ name: 'Danny' }}>
				<Frame />
			</Provider>
		)
	}
}
