import * as React from 'react'
import shortId from 'shortid'

// Main "store" for holding all stores.
const shards = {
  stores: {},

  // Just an easier way to retrieve a store.
  getStore(name) {
    return this.stores[name]
  },

  // Just an easier way to retrieve a store's receivers.
  getReceivers(name) {
    return this.getStore(name).receivers
  }
}

// Creates the store that will be held in shards.stores.
const generateStore = (name, init) => {
  return {
    // Initialize data and actions.
    ...initStore(name, init),

    // Initialize with no receivers.
    receivers: new Map(),

    // Adds a receiver to this store.
    addReceiver(id, receiver) {
      shards.getStore(name).receivers.set(id, receiver)
    },

    // Get all receivers of this store and force them to update.
    updateReceivers() {
      const store = shards.getStore(name)

      store.receivers.forEach((receiver, id) => {
        receiver.manualUpdate(store)
      })
    }
  }
}

// Generate a store and send it to shards.stores.
const createStore = (name, init) => {
  const store = (shards.stores[name] = generateStore(name, init))
}

// Takes in the "initialState". For each action in the initialState,
// it is wrapped in a function that calls updateReceivers() after
// the action is complete.
const initStore = (storeName, init) => {
  return Object.entries(init).reduce((final, [name, value]) => {
    // If the initialState value is not a function,
    // just leave it the fuck alone.
    if (typeof value !== 'function') {
      final[name] = value
      return final
    }

    final[name] = (...args) => {
      const store = shards.getStore(storeName)
      value(store, ...args)
      store.updateReceivers()
    }

    return final
  }, {})
}

// Basic shit.
const { Provider: _Provider, Consumer } = React.createContext()

export const ShardsProvider = (props) => {
  return <_Provider value={shards.stores}>{props.children}</_Provider>
}

// "Consumer" for shards stores.
export const ShardsReceiver = (storeName) => (Comp) => {
  class Receiver extends React.Component {
    displayName = `shards_consumer_${shortId.generate()}`

    constructor(props) {
      super(props)
      this.store = shards.getStore(storeName)
      // Register this new component as a receiver (listener) for
      // changes to the specified store.
      this.store.addReceiver(this.displayName, this)
    }

    // Make sure we have the latest version of the store
    // and forceUpdate. (-- Because I wanted to go with
    // immutability so the store would be new every time.)
    manualUpdate = (store) => {
      this.store = store
      this.forceUpdate()
    }

    render() {
      return (
        <Consumer>
          {(stores) => <Comp {...this.props} store={this.store} />}
        </Consumer>
      )
    }
  }

  return Receiver
}

// EXAMPLE: Create a store.
createStore('editor', {
  // give the store data
  content: '// nothing to show',

  // give the store actions
  setContent(store, content) {
    store.content = content
  }
})

export { shards }
