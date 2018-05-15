export const initStore = (storeName, final) => {
  const initReducer = (final, [name, value]) => {
    // Do nothing if not a function.
    if (typeof value !== 'function') {
      final[name] = value
      return final
    }

    final[name] = (...args) => {
      const store = shards.store(storeName)
      value(store, ...args)
      shards.getStore(storeName).updateReceivers()
    }

    return final
  }

  const reducer = initReducer(storeName, init)
  return Object.entries(init).reduce(reducer, {})
}

// Takes in the "initialState". For each action in the initialState,
// it is wrapped in a function that calls updateReceivers() after
// the action is complete.
const initStore = (storeName, init) => {}
