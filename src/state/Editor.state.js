import { types } from 'mobx-state-tree'

import OutputState from './Output.state'

const DEFAULT_CONTENTS = `const intercept = require('intercept-stdout')\nconst { createVm } = require('./vm')\n\nmodule.exports.run = (code, ws) => {\n\tconst vm = createVm()\n\tvm.on('console.log', (...args) => {\n\t\targs.forEach(arg => {\n\t\t\tws.send(JSON.stringify({ stdout: arg }))\n\t\t})\n\t})\n\n\treturn new Promise((resolve, reject) => {\n\t\ttry {\n\t\t\tvm.run(code)\n\t\t\tresolve()\n\t\t} catch (error) {\n\t\t\treject(error)\n\t\t}\n\t})\n}`

const actions = self => ({
	setContents(contents) {
		console.log('contents:', { contents })
		self.contents = contents
	}
})

const views = self => ({
	get characterCount() {
		return self.contents.length
	}
})

export default types
	.model({
		contents: types.optional(types.string, DEFAULT_CONTENTS),
		output: types.optional(OutputState, {})
	})
	.actions(actions)
	.views(views)
