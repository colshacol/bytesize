require('dotenv').config()

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import webSockets from 'express-ws'
import { database } from '#database'
import { sockets } from '#sockets'
import { api } from './api'
const path = require('path')

const app = express()
const server = webSockets(app)
const router = express.Router()
const PORT = process.env.DEV_PORT
const staticDir = `${__dirname}/../dist`

app.use(express.static(__dirname + '/../dist'))
app.use(bodyParser.json())
app.use(cors())

app.ws('/run', sockets.routes.run)

app.use('/api', api)

const handleListening = () => {
	console.log(`\n\nrunning:  http://127.0.0.1:${PORT}\n\n`)
}

app.listen(PORT, handleListening)
