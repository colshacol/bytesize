import debug from 'debug'

export const locast = (getter, setter) => {
  const _locast = new Proxy(
    {},
    {
      get(target, property) {
        if (!property) return Reflect.get(target)

        getter(target, property)

        if (property === 'values')
          return Object.values(localStorage).map(JSON.parse)

        if (property === 'keys') return Object.keys(localStorage)

        if (property === 'entries')
          return Object.entries(localStorage).map((pair) => [
            pair[0],
            JSON.parse(pair[1])
          ])

        const data = localStorage.getItem(property) || ''
        return ['{', '['].includes(data[0]) ? JSON.parse(data) : data
      },
      set(target, property, value) {
        setter(target, property, value)
        if (!property)
          throw new Error('Trying to reassign localStorage, eh? >.>')

        localStorage.setItem(
          property,
          typeof value === 'string' ? value : JSON.stringify(value)
        )
        return true
      }
    }
  )

  return _locast
}

const debugGetter = debug('[ locast:getter ]')
const debugSetter = debug('[ locast:setter ]')

const locastGetter = (target, property) => {
  debugGetter([property])
}

const locastSetter = (target, property, value) => {
  debugSetter([property, value])
}

window.locast = locast(locastGetter, locastSetter)
