import { types, flow, getSnapshot } from 'mobx-state-tree'
import makeId from 'get-uid'

export const jsonify = (self) => {
  return () => {
    getSnapshot(self)
  }
}
