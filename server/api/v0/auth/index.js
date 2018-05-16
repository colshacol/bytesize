import { database, dbUtils } from '$database'
import { tmpModules, insertNewModule } from '$database/tmpModules'
import r from 'ramda'

import { sendConfirmationEmail } from './confirmationEmail'

import {
  tmpUsers,
  generateUser,
  addNewModuleToUser,
  findUserByEmail
} from '$database/tmpUsers'

export const createNewModule = async (req, res) => {
  const user = await findUserByEmail(req.body.email)
  !user ? handleNewUser(req, res) : handleExistingUser(user, req, res)
}

const handleNewUser = async (req, res) => {
  const user = generateUser(req.body.email)
  const updatedUser = addNewModuleToUser(user)
  const newModule = await insertNewModule(r.last(updatedUser.modules))(
    user.email
  )

  // TODO: File issue on immer for non-extensible objects.
  const createdUser = await tmpUsers.save({ ...updatedUser })
  res.send({ module: newModule.docs, user: createdUser })
  sendConfirmationEmail(res.body.email)(newModule.docs)
}

const handleExistingUser = async (user, req, res) => {
  const userWithModule = addNewModuleToUser(user)
  const updatedUser = await tmpUsers.save(userWithModule)
  const newModule = await insertNewModule(r.last(updatedUser.modules))(
    user.email
  )

  res.send({ module: newModule.docs, user: updatedUser })
  sendConfirmationEmail(req.body.email)(newModule.docs)
}
