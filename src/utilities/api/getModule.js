const headers = new Headers({
  'Content-Type': 'application/json'
})

export const getModule = async (moduleId, email) => {
  const response = await goGet.json(`<API>/modules/${email}/${moduleId}`, {
    method: 'GET'
  })

  return response
}
