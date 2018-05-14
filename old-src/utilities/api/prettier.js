const headers = new Headers({
  'Content-Type': 'application/json'
})

export const prettier = async (code) => {
  const response = await fetch('$SERVER_ADDRESS$$API_PATH$/prettier', {
    headers,
    method: 'POST',
    body: JSON.stringify({
      config: null,
      code: code
    })
  })

  return await response.json()
}
