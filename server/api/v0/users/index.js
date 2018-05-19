import express from 'express'
import passport from 'passport'
import { User } from '$database'

// Router for /api/v0/users
const router = express.Router()

const create = (req, res, next) => {
  const { emailAddress, password } = req.body
  
  const newUser = new User({
    emailAddress: emailAddress,
    password: password,
    username: 'Joe'
  })
  
  User.register(newUser, password, (err, user) => {
    err && throw new Error('FUCKKK', err)

    req.login(user, (err) => {
      err && throw new Error('fuck again---\n\n\n\n', err)
    })

    res.json({ user: user })
  })
}

router.post('/create', create)

export { router }
