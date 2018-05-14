import { types, flow } from 'mobx-state-tree'

import { ModuleState } from '../Module'

const model = {
  nickname: types.optional(types.string, ''),
  name: types.optional(types.string, ''),
  picture: types.optional(types.string, ''),
  updated_at: types.optional(types.string, ''),
  iss: types.optional(types.string, ''),
  sub: types.optional(types.string, ''),
  aud: types.optional(types.string, ''),
  iat: types.optional(types.number, 0),
  exp: types.optional(types.number, 0),
  at_hash: types.optional(types.string, ''),
  nonce: types.optional(types.string, ''),
  userName: types.optional(types.string, ''),
  uid: types.optional(types.string, ''),
  _id: types.optional(types.string, ''),
  modules: types.optional(types.array(ModuleState), [])
}

const actions = (self) => {
  return {
    setData(user) {
      self.userName = user.userName
      self.uid = String(user.uid)
      self._id = String(user._id)

      user.modules.forEach((module) => {
        self.modules.push(ModuleState.create(module))
      })
    }
  }
}

const views = (self) => {
  return {}
}

export default types
  .model(model)
  .actions(actions)
  .views(views)
