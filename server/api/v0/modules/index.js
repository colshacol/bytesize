import express from 'express'
import { database, dbUtils } from '$database'
import { retrieveExistingModule } from '$database/tmpModules'

const router = express.Router()

const getModule = async (req, res) => {
  const module = await retrieveExistingModule(req.params.moduleId)(
    req.params.email
  )

  console.log({ module })
  res.send(module.docs[0])
}

// /modules
// router.post('/create', modules)
router.get('/:email/:moduleId', getModule)

export { router }
