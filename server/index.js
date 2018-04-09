import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import webSockets from 'express-ws'
import { database } from '#database'
import { sockets } from '#sockets'

const app = express()
const server = webSockets(app)
const PORT = 8765

app.use(bodyParser.json())
app.use(cors())

app.ws('/run', sockets.routes.run)

app.get('/api/v0/user/:userName', (request, response) => {
	database.users.find({ userName: request.params.userName }, (err, data) => {
		response.send(data[0])
	})
})

app.get('/api/v0/module/:userName/:id', (request, response) => {
	database.users.find({ userName: request.params.userName }, (err, data) => {
		console.log(request.params, { data }, data[0].modules)
		response.send({
			module: data[0].modules.find(m => {
				console.log({ m }, m.uid, request.params.id)
				return m.uid == request.params.id
			})
		})
	})
})

// app.get('/api/v0/module/:id', (request, response) => {
// 	database.modules.find({ userName: request.params.userName }, (err, data) => {
// 		console.log(data)
// 		response.send({ data: data[0] })
// 	})
// })

const handleListening = () => {
	console.log(`\n\nrunning:  http://localhost:${PORT}\n\n`)
}

app.listen(PORT, handleListening)
