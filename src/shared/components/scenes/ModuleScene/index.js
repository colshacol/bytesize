import * as React from 'react'
import psymon from 'psymon'

import * as methods from './methods'
import * as lifecycle from './lifecycle'
import { component } from './component'

const state = {
	output: [],
	code: ''
}

export const ModuleScene = psymon.component('ModuleScene', {
	component,
	lifecycle,
	methods,
	state
})
