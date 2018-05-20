import express from 'express'
import { router as users } from './users'
import { router as code } from './code'

// Router for /api/v0
const router = express.Router()

router.use('/users', users)
router.use('/code', code)

export { router }
