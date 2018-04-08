const babelrc = require('./babelrc')

export const TRANSFORM_OPTIONS = { plugins: babelrc.plugins, presets: babelrc.presets }
