import psymon from 'psymon'

import * as methods from './methods'
import * as lifecycle from './lifecycle'
import { component } from './component'

const state = {
	code:
		"// here is some code\n\nconst foo = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve('RESOLVED')\n        }, 1250)\n    })\n}\n\nconsole.log('starting-----')\n\nconsole.log({\n    name: 'tommy',\n    age: 34,\n    cool: true\n})\n\nfoo().then(console.log)\n\nconsole.log('endinggg----')\n\n// YAY!"
}

export const Editor = psymon.component('Editor', {
	component,
	lifecycle,
	methods,
	state
})
