import * as React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from '#scenes/App'

import './styles/index.css'
// import './styles/potionsTheme/react-mde.css'
import 'react-mde/lib/styles/css/react-mde-all.css'
import { applyGlobalStyles } from './styles/global'

applyGlobalStyles()

const _render = (Component) => {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('mountPoint')
	)
}

// TODO: Ensure this gets eliminated with minification.
if (__DEV__) {
	console.log('!!__DEV__')
	if (module.hot) {
		console.log('!!module.hot')
		module.hot.accept('./scenes/App/index.js', () => {
			_render(require('./scenes/App/index.js').App)
		})
	}
}

_render(App)
