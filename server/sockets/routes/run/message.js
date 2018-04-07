import * as sandbox from '#sandbox'
import regeneratorRuntime from 'regenerator-runtime'

const handleError = error => {}

export const message = socket => async data => {
	try {
		await sandbox.execute(JSON.parse(data).code, socket)
	} catch (error) {
		console.log('[sandbox] error:', error)
	} finally {
		console.log('complete---')
	}
}
