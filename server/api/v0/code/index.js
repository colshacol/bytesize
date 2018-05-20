import express from 'express'

import { clean } from './clean'

// Router for /api/v0/code
const router = express.Router()

router.post('/clean', clean)

export { router }
