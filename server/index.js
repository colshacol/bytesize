import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import webSockets from 'express-ws'

import { sockets } from '#sockets'

const app = express()
const server = webSockets(app)
const PORT = 8765

app.use(bodyParser.json())
app.use(cors())

app.ws('/run', sockets.routes.run)

const handleListening = () => {
	console.log(`\n\nrunning:  http://localhost:${PORT}\n\n`)
}

app.listen(PORT, handleListening)
