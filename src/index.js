require('@babel/polyfill')
require('regenerator-runtime')

import * as React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from './App'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('mountPoint')
	)
}

// TODO: Ensure this gets eliminated with minification.
if (__DEV__) {
	if (module.hot) {
		module.hot.accept('./App.js', () => {
			render(require('./App').App)
		})
	}
}

render(App)
