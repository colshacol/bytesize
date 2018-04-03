const events = require('./events')

module.exports.run = (ws, req) => {
	ws.on('message', events.message(ws))
	ws.on('close', events.close)
}
