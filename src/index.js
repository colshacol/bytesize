import * as React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from '#components/App'

import './styles/index.css'

const _render = Component => {
	render(
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
			_render(require('./components/App/index.js').App)
		})
	}
}

_render(App)
