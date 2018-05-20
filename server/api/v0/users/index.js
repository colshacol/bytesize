import express from 'express'
import passport from 'passport'
import { User } from '$database'
// import * as debuggers from './debuggers'
import { create } from './create'
import { login } from './login'
// import { deactivate } from './deactivate'

//#1 Router for /api/v0/users
const router = express.Router()

router.post('/create', create)
router.post('/login', login)
// // router.post('/deactivate', deactivate)

export { router }
