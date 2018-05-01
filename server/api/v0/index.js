import express from 'express'
import { database } from '#database'
import { prettier } from './prettier'
// import passport from 'passport'
// import * as auth from './auth'

const router = express.Router()

// TODO: Create user.

router.get('/users/:userName', (req, res, next) => {
	console.log('got a request....')
	database.users.find({ userName: req.params.userName }, (err, data) => {
		res.send(data[0])
	})
})

router.get('/module/:userName/:id', (req, res, next) => {
	database.users.find({ userName: req.params.userName }, (err, data) => {
		res.send({
			module: data[0].modules.find((m) => {
				return m.uid == req.params.id
			})
		})
	})
})

router.post('/module/save/:userName/:uid', (req, res, next) => {
	const { userName, uid: moduleUid } = req.params
	const { lessonContent } = req.body.module

	database.users.findOne({ userName: userName }, (err, data) => {
		const matchingModule = data.modules.filter((module) => {
			return module.uid == moduleUid
		})[0]

		if (matchingModule) {
			data.modules = data.modules.map((module) => {
				return !module.uid == moduleUid
					? module
					: {
							...module,
							lessonContent: req.body.module.lessonContent
					  }
			})
		}

		database.users.save(data, (err) => {
			if (err) console.log('\n\n', err, '\n')
		})

		res.send({ done: true })
	})
})

// router.post('/auth/login', passport.authenticate('local'), auth.login)

router.post('/prettier', prettier)

export { router }
