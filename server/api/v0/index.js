import express from 'express'
import { database } from '#database'
import { prettier } from './prettier'
// import passport from 'passport'
// import * as auth from './auth'

const router = express.Router()

// TODO: Create user.

router.get('/users/:userName', (req, res, next) => {
	database.users.find({ userName: req.params.userName }, (err, data) => {
		res.send(data[0])
	})
})

router.get('/module/:userName/:id', (req, res, next) => {
	database.users.find({ userName: req.params.userName }, (err, data) => {
		res.send({
			module: data[0].modules.find(m => {
				return m.uid == req.params.id
			})
		})
	})
})

// router.post('/auth/login', passport.authenticate('local'), auth.login)

router.get('/prettier', prettier)

export { router }
