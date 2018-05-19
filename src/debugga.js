import debug from 'debug'

const debugMessage = (message) => {
  return `[≈≈ bytesized debugger ≈≈] ∞\n\n ${message}\n\n`
}

class Scope {
  constructor(name) {
    this.name = name
  }

  whenMissing = (cond) => (message) => {
    if (cond == null || cond === undefined) {
      debug()
    }
  }
}

const Debugging = (() => {
  const scopes = new Map()

  return {
    Scope
  }
})()

const reqBodyDebugger = new Debugging.Scope('ROUTE ∞ /api/v0/users/create')

reqBodyDebugger.warning(
  [emailAddress],
  `req.body.emailAddress === ${emailAddress} not present.`
)
