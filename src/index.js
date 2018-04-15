import * as React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from '#components/App'

import './styles/normalize.css'
import './styles/index.css'
// import './styles/potionsTheme/react-mde.css'
import 'react-mde/lib/styles/css/react-mde-all.css'

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
	console.log('!!__DEV__')
	if (module.hot) {
		console.log('!!module.hot')
		module.hot.accept('./components/App/index.js', () => {
			_render(require('./components/App/index.js').App)
		})
	}
}

_render(App)

/*


	let url = `https://gorgeous-jvkoayanir.now.sh/`
	let res = await fetch(url, {
  	headers: new Headers({
    	'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
    	code: 'const\n\tfoo=\n\n\n\ndogshit => { console.log(\n\n"hello"\n\n) }',
      config: null
    }),
    method: 'POST',
    cors: 'no-cors'
	})
	
	*/
