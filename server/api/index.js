import express from 'express'
import { router as v0 } from './v0'

const router = express.Router()

router.use('/v0', v0)

export { router as api }
