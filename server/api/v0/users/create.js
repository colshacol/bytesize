import express from 'express'
import passport from 'passport'

type RequestT = {
  body: {
    username: string,
    emailAddress: string,
    password: string
  }
}

// api/v0/users/create
export const create = async (request: RequestT, response) => {
  const {
    getPostData,
    createUser,
    registerUser,
    logInUser
  } = require('./utilities')

  const postData = getPostData(request)
  const createdUser = createUser(postData)
  const registration = await registerUser(createdUser, postData)
  const login = await logInUser(request)(registration.user)

  // TODO: Handle createdUser.error.
  // TODO: Handle registration.error.
  // TODO: Handle login.error.

  response.json(registration)
}
