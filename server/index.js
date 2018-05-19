require('dotenv').config()

import express from 'express'
import cors from 'cors'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import session from 'express-session'
import bodyParser from 'body-parser'
import webSockets from 'express-ws'
import { User, Module } from '$database'
import { sockets } from '$sockets'
import { api } from './api'
import path from 'path'

// TODO: Clean up.

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

const mongoose = require('mongoose')
mongoose.connect(
  `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds239439.mlab.com:39439/bytesize`
)

const app = express()
const server = webSockets(app)
const PORT = process.env.DEV_PORT

app.use(express.static(path.resolve(process.cwd(), 'dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.set('trust proxy', 1)

app.use(
  session({
    secret: 'putSomeMethHere',
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.ws('/run', sockets.routes.run)

app.use('/api', (req, res, next) => {
  console.log('\n\n/api\n\n')
  api(req, res, next)
})

app.listen(PORT, () => {
  console.log(`\n\nrunning:  http://127.0.0.1:${PORT}\n\n`)
})
