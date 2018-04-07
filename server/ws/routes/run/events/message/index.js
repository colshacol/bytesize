const { run } = require('../../../../../run')
// const babel = require('@babel/core')

const catchError = error => console.log('app.ws("/run") -> error:', error)

// const compile = code => {
// 	const compiledCode = babel.transform(code, TRANSFORM_OPTIONS)
// 	require('fs').writeFileSync('./results.js', compiledCode, 'utf8')
// }

module.exports.message = ws => data => {
	// compile(data.code)
	console.log('got it?', data.code)
	run(JSON.parse(data).code, ws).catch(catchError)
}
