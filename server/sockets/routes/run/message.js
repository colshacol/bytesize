import * as sandbox from '#sandbox'

const handleError = error => {}

const ERRORS = new Map()

ERRORS.set(
	'Error: Loop Stack Exceeded',
	'[Error: Loop Stack Exceeded] bytesize forcefully ends loops that iterate more than 99 times. This is an effort to save our users, as well as our servers, from crashing! It is likely that you wrote a loop that iterated more than 99 times.'
)

export const message = socket => async data => {
	try {
		await sandbox.execute(JSON.parse(data).code, socket)
	} catch (error) {
		console.log('[sandbox] error:', error.toString())
		socket.send(
			JSON.stringify({
				type: 'STDERR',
				messages: [ERRORS.get(error.toString()) || error.toString()]
			})
		)
	}
}
