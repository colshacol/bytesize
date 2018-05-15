require('./fetch')
require('./locast')

import chex from '#utilities/chex'
window.chex = chex

import * as React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from './App'

import './styles/index.css'
import 'react-mde/lib/styles/css/react-mde-all.css'

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
  console.log('!!__DEV__', !!__DEV__)
  if (module.hot) {
    console.log('!!module.hot', !!module.hot)
    module.hot.accept('./App.js', () => {
      _render(require('./App.js').App)
    })
  }
}

_render(App)
