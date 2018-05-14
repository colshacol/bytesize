export const gorgeous = async (code) => {
  const response = await fetch('https://gorgeous-jvkoayanir.now.sh/', {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify({
      config: null,
      code
    })
  })

  const json = await response.json()
  // json.error && (throw new Error(json.error))
  return json.pretty
}
