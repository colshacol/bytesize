import shortId from 'shortid'
import { createStore } from './createStore'

export class Shards {
  stores = {}

  getStore = getStore(this)
  receiversOf = receiversOf(this)
}

const getStore = (shards) => (name) => {
  return shards.stores[name]
}

const receiversOf = (shards) => (name) => {
  return shards.store(name).receivers
}
