const Chex = (styles) => {
  const _chex = Object.entries(styles).reduce((final, [name, style]) => {
    final[name] = (title, ...args) => {
      if (typeof style === 'object' && 'emoji' in style) {
        console.group(`%c${title}`, style.style)
        console.log(...args)
        console.log(`%c/end ${title}/\n\n`, 'color: rgba(255,255,255,0.25);')
        return console.groupEnd()
      }
    }

    return final
  }, {})

  window.chex = _chex
  global.chex = _chex
  return chex
}

export default Chex({
  blue: {
    emoji: '🔎',
    style: 'color:#fff; background-color: #4080ff; padding: 2px 10px;'
  },
  green: {
    emoji: '🔎',
    style: 'color:#fff; background-color: #26d741; padding: 2px 10px;'
  }
})
