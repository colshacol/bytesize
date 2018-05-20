import express from 'express'
import passport from 'passport'

// api/v0/users/create
export const login = async (request: RequestT, response) => {
  console.log('<<<<< ATTEMPTING TO LOG IN >>>>>')
  console.log({
    username: request.body.username,
    password: request.body.password
  })

  response.send({ loggedIn: false })
}
