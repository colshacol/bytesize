import { message } from './message'
import { close } from './close'

export const run = (socket, request) => {
	console.log('[socket/run] connected')

	socket.on('message', message(socket))
	socket.on('close', close)
}
