import * as React from 'react'
import shortId from 'shortid'

// Main "store" for holding all stores.
class Shards {
  constructor(stores: Object) {
    Object.entries(stores).forEach(([storeName, init]) => {
      this.registerStore(storeName, this.createStore(storeName, init))
    })

    window.chex.blue('howdy fucker', this.stores)

    const { provider, receiver } = this.createComponents()
    this.provider = provider
    this.receiver = receiver
  }

  stores = {}
  provider = null
  receiver = null

  getStores(storeNames: string[]) {
    return storeNames.reduce((final, storeName) => {
      final[storeName] = this.stores[storeName]
      return final
    }, {})
  }

  // Just an easier way to retrieve a store.
  getStore(storeName: string | string[]) {
    return !Array.isArray(storeName)
      ? { [name]: this.stores[name] }
      : this.getStores(storeName)
  }

  // Just an easier way to retrieve a store's receivers.
  receiversOf(name) {
    return this.stores[name].receivers
  }

  registerStore(name, store) {
    this.stores[name] = store
  }

  createStore(storeName, init) {
    const store = this.initStore(storeName, init)

    // Add hidden properties for internal shards usage.
    const getThisStore = () => {
      return this.stores[storeName]
    }

    Object.defineProperty(store, 'receivers', {
      enumaerable: false,
      value: new Map()
    })

    Object.defineProperty(store, 'addReceiver', {
      enumerable: false,
      value: (id, receiver) => {
        getThisStore().receivers.set(id, receiver)
      }
    })

    Object.defineProperty(store, 'updateReceivers', {
      enumaerable: false,
      value: () => {
        getThisStore().receivers.forEach((receiver, id) => {
          receiver.manualUpdate()
        })
      }
    })

    return store
  }

  initStore(storeName, init) {
    return Object.entries(init).reduce((final, [prop, value]) => {
      final[prop] =
        typeof value !== 'function'
          ? value
          : (...args) => {
              const store = this.stores[storeName]
              value(store, ...args)
              store.updateReceivers()
            }

      return final
    }, {})
  }

  createComponents() {
    const shards = this
    const { Provider, Consumer } = React.createContext()

    class ShardsProvider extends React.PureComponent {
      render() {
        return <Provider value={shards.stores}>{this.props.children}</Provider>
      }
    }

    const receiver = (storeNames) => (Comp) => {
      const _storeNames = Array.isArray(storeNames) ? storeNames : [storeNames]

      return class Receiver extends React.PureComponent {
        displayName = `shards_consumer_${shortId.generate()}`

        constructor(props) {
          super(props)
          this.stores = shards.getStores(_storeNames)

          Object.entries(this.stores).forEach(([_storeName, store]) => {
            store.addReceiver(this.displayName, this)
          })
        }

        manualUpdate = () => {
          // Stash new reference to relevant stores.
          this.stores = shards.getStores(_storeNames)
          this.forceUpdate()
        }

        render() {
          return (
            <Consumer>
              {(stores) => <Comp {...this.props} stores={this.stores} />}
            </Consumer>
          )
        }
      }
    }

    return { provider: ShardsProvider, receiver }
  }
}

export default Shards

/*

import Shards from 'shards'

const LESSON_DEFAULT_CONTENT = "This is your lesson."

// NOTE: Global state because it may be re-used
// in multiple places.
const editorStore = {
  editedContent: '// loading code...',
  content: '// loading code...',

  setContent(store, content) {
    store.content = content
  },

  inheritContent(store, module) {
    store.content = module.editorContent
    store.editedContent = module.editorContent
  }
}

// NOTE: Global state because it may be re-used
// in multiple places.
const lessonStore = {
  editedContent: LESSON_DEFAULT_CONTENT,
  content: LESSON_DEFAULT_CONTENT,
  editing: false,

  setContent(store, content) {
    store.content = content
  },

  setEditedContent(store, content) {
    store.editedContent = content
  },

  toggleEditing(store) {
    store.editing = !store.editing
  },

  saveEditedContent(store) {
    store.content = store.editedContent
    store.toggleEditing()
  },

  cancelEditedContent(store) {
    store.editedContent = store.content
    store.toggleEditing()
  },

  inheritContent(store, module) {
    store.content = module.lessonContent
    store.editedContent = module.lessonContent
    store.editing = false
  }
}

const shards = new Shards({
  editorStore,
  lessonStore
})

console.log({ shards })

export default shards


*/
