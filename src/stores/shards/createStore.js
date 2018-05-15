const createStore = (name, init) => {
  const store = (shards.stores[name] = generateStore(name, init))
}

const defineProperty = (target) => (name, value) => {
  Object.defineProperty(target, name, {
    enumaerable: false,
    value
  })
}

// Creates the store that will be held in shards.stores.
const createStore = (shards) => (storeName, init) => {
  const store = initStore(storeName, init)

  // Add hidden properties for internal shards usage.

  Object.defineProperty(store, 'receivers', {
    enumaerable: false,
    value: new Map()
  })

  Object.defineProperty(store, 'addReceiver', {
    enumerable: false,
    value: (id, receiver) => {
      shards.store(storeName).receivers.set(id, receiver)
    }
  })

  Object.defineProperty(store, 'updateReceivers', {
    enumaerable: false,
    value: () => {
      const store = shards.store(storeName)

      store.receivers.forEach((receiver, id) => {
        receiver.manualUpdate(store)
      })
    }
  })

  return store
}
