import { types } from 'mobx-state-tree'
import { autorun } from 'mobx'
import uuid from 'uuid/v4'

const model = {
  uid: types.optional(types.string, () => uuid()),
  type: types.string,
  message: types.frozen
}

export const LogState = types.model(model)
