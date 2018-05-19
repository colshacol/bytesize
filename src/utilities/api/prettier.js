const headers = new Headers({
	'Content-Type': 'application/json'
})

export const prettier = async (code) => {
	const response = await goGet.json('<API>/prettier', {
		headers,
		method: 'POST',
		body: JSON.stringify({
			config: null,
			code: code
		})
	})
}
