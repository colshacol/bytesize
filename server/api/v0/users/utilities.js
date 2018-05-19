const debug = require('debug')('(bytesized) /api/v0/users/create -> ')

export const getPostData = (request) => {
  debug(`req.emailAddress === ${request.body.emailAddress}`)
  debug(`req.username === ${request.body.username}`)
  debug(`req.password === ${request.body.password}`)

  return {
    emailAddress: request.body.emailAddress,
    username: request.body.username,
    password: request.body.password
  }
}

export const createUser = (data) => {
  const { User } = require('$database')
  debug(`createUser -> data === [ ${Object.entries(data).join(' , ')} ]`)

  return new User({
    emailAddress: data.emailAddress,
    password: data.password,
    username: data.username
  })
}

export const registerUser = (user, data) => {
  return new Promise((resolve) => {
    const { User } = require('$database')

    User.register(user, data.password, (error, _user) => {
      error && console.error('Error in User.register ->', error)
      resolve({ user: _user, error })
    })
  })
}

export const logInUser = (request) => (user) => {
  return new Promise((resolve) => {
    request.login(user, (error, data) => {
      error && console.error('Error in req.login ->', error)
      resolve({ data, error })
    })
  })
}
