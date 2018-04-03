const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const ws = require('express-ws')

const { applySockets } = require('./ws/applySockets')
const { run } = require('./run')

const app = express()
const server = ws(app)

app.use(bodyParser.json())
app.use(cors())

applySockets(app)

app.listen(8765, () => {
	// TODO: foobar
	console.log('\n\nrunning:  http://localhost:8765')
})
