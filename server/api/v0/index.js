import express from 'express'
import { database } from '#database'

const router = express.Router()

router.get('/user/:userName', (req, res, next) => {
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

export { router }
