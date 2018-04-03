import * as React from 'react'
import psymon from 'psymon'

import * as methods from './methods'
import * as lifecycle from './lifecycle'
import { component } from './component'

const state = {
	// output: []
}

export const OutputPanel = psymon.component('OutputPanel', {
	component,
	lifecycle,
	methods,
	state
})
