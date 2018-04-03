require('@babel/polyfill')
require('regenerator-runtime')

// const runCode = async code => {
// 	const response = await fetch('http://localhost:8765/run', {
// 		method: 'POST',
// 		body: JSON.stringify(code),
// 		headers: { 'Content-Type': 'application/json' }
// 	})

// 	return await response.json()
// }

export const run = self => async event => {
	// const data = await runCode({ code: self.props.code })
	console.log({ self })
	self.props.socket.send(JSON.stringify({ code: self.props.code }))
}

// fetch('http://httpbin.org/post', {
// 	method: 'POST',
// 	body: JSON.stringify(body),
// 	headers: { 'Content-Type': 'application/json' }
// })
// 	.then(res => res.json())
// 	.then(json => console.log(json))
