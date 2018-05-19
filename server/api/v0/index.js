import express from 'express'
import { router as users } from './users'
// import { router as modules } from './modules'

// Router for /api/v0
const router = express.Router()

router.use('/users', users)
// router.use('/modules', modules)

export { router }
