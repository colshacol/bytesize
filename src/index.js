require('./fetch')
require('./locast')

import chex from '#utilities/chex'
window.chex = chex

import * as React from 'react'
import { render } from 'react-dom'

import App from './App'

import './styles/index.css'
import 'react-mde/lib/styles/css/react-mde-all.css'

render(<App />, document.getElementById('mountPoint'))
