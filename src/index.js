// TODO: Require this shit elsewhere.
require('@babel/polyfill')
require('regenerator-runtime')

import * as React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from '#components/App'

import './styles/index.css'

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
		module.hot.accept('./components/App/index.js', () => {
			render(require('./components/App/index.js').App)
		})
	}
}

render(App)
