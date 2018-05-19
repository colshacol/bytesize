import express from 'express'
import passport from 'passport'
import { User } from '$database'
import * as debuggers from './debuggers'
import { create } from './create'

//#1 Router for /api/v0/users
const router = express.Router()

router.post('/create', create)

export { router }
