const debug = require('debug')('(bytesized) /api/v0/code/clean -> ')

export const mergedConfig = (config = {}) => {
  const { DEFAULT_CONFIG } = require('./consts')

  return {
    ...DEFAULT_CONFIG,
    ...config
  }
}

const cleanThatShit = (code) => (config) => {
  const prettier = require('prettier')

  return prettier.format(code, mergedConfig(config))
}

export const clean = (request, response) => {
  debug(`req.code === ${request.body.code}`)
  debug(`req.config === ${request.body.config}`)

  res.json({
    code: cleanThatShit(request.body.code)(request.body.config),
    error: null
  })
}
