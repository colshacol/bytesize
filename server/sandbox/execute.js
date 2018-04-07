import intercept from 'intercept-stdout'
import { createSandbox } from './createSandbox'
import { compile } from './compile'

const SUCCESS = {
	type: 'SUCCESS'
}

export const execute = (code, socket) => {
	const sandbox = createSandbox(socket)
	const compiledCode = compile(code)

	return new Promise((resolve, reject) => {
		try {
			sandbox.run(compiledCode)
			resolve(SUCCESS)
		} catch (error) {
			reject(Error(error))
		}
	})
}
