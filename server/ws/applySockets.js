const routes = require('./routes')

// NOTE: Different routes should be handled here.
module.exports.applySockets = server => {
	server.ws('/run', routes.run)
}
