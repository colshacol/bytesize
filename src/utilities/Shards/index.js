import * as React from 'react'
import shortId from 'shortid'

const shards = {
  stores: {},

  createStore,

  getStore(name) {
    return this.stores[name]
  },

  getReceivers(name) {
    return this.getStore(name).receivers
  }
}

const generateStore = (name, init) => {
  return {
    ...initStore(name, init),
    receivers: new Map(),

    addReceiver(id, receiver) {
      shards.getStore(name).receivers.set(id, receiver)
    },

    updateReceivers() {
      const store = shards.getStore(name)

      store.receivers.forEach((receiver, id) => {
        receiver.manualUpdate(store)
      })
    }
  }
}

const createStore = (name, init) => {
  const store = (shards.stores[name] = generateStore(name, init))
}

const initStore = (storeName, init) => {
  return Object.entries(init).reduce((final, [name, value]) => {
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

const { Provider: _Provider, Consumer } = React.createContext()

export const ShardsProvider = (props) => {
  return (
    <_Provider value={{ stores: shards.stores }}>{props.children}</_Provider>
  )
}

export const ShardsReceiver = (storeName) => (Comp) => {
  class Receiver extends React.Component {
    displayName = `shards_consumer_${shortId.generate()}`
    store = shards.getStore(storeName)

    componentWillMount() {
      shards.getStore(storeName).addReceiver(this.displayName, this)
    }

    manualUpdate(store) {
      this.store = store
      this.forceUpdate()
    }

    componentDidMount() {}

    render() {
      return (
        <Consumer>
          {(stores) => <Comp {...this.props} stores={stores} />}
        </Consumer>
      )
    }
  }

  return Receiver
}

createStore('editor', {
  content: '// nothing to show',
  setContent(store, content) {
    store.content = content
  }
})

export { shards }
