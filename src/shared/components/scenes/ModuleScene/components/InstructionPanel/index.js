import * as React from 'react'
import psymon from 'psymon'

import * as methods from './methods'
import * as lifecycle from './lifecycle'
import { component } from './component'

const state = {}

export const InstructionPanel = psymon.component('InstructionPanel', {
	component,
	lifecycle,
	methods,
	state
})
