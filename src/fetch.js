const toJson = (res) => {
  return res.json()
}

const handleError = (data, error) => {
  return (handler) => {
    return handler(data, error)
  }
}

const onSuccess = (resolve) => (data) => {
  resolve({ data, error: null, handleError: handleError(data, null) })
}

const onError = (resolve) => (error) => {
  resolve({ data: null, error, handleError: handleError(null, error) })
}

window.goGet = {
  json(...args) {
    return new Promise((resolve, reject) => {
      args[0] = args[0].replace(/(<API>)/, 'http://localhost:9876/api/v0')

      fetch(...args)
        .then(toJson)
        .then(onSuccess(resolve))
        .catch(onError(resolve))
    })
  }
}
