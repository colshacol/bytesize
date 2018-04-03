import psymon from 'psymon'

import * as methods from './methods'
import * as lifecycle from './lifecycle'
import { component } from './component'

const state = {}

export const Button = psymon.component('Button', {
	component,
	lifecycle,
	methods,
	state
})
