import express from 'express'
import { database, dbUtils } from '$database'
import { createNewModule } from './auth'
import { router as modules } from './modules'
import { prettier } from './prettier'

const router = express.Router()

router.post('/createNewModule', createNewModule)
router.use('/modules', modules)

router.get('/users/:userName', (req, res, next) => {
  console.log('got a request....')
  database.users.find({ userName: req.params.userName }, (err, data) => {
    res.send(data[0])
  })
})

router.get('/module/:userName/:id', (req, res, next) => {
  database.users.find({ userName: req.params.userName }, (err, data) => {
    res.send({
      module: data[0].modules.find((m) => {
        return m.uid == req.params.id
      })
    })
  })
})

router.post('/prettier', prettier)

export { router }
