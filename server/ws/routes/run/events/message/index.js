const { run } = require('../../../../../run')

const catchError = error => console.log('app.ws("/run") -> error:', error)

module.exports.message = ws => data => {
	run(JSON.parse(data).code, ws).catch(catchError)
}
