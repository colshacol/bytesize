import psymon from 'psymon'

import * as methods from './methods'
import * as lifecycle from './lifecycle'
import { component } from './component'

const state = {}

export const HomeScene = psymon.component('HomeScene', {
	component,
	lifecycle,
	methods,
	state
})
