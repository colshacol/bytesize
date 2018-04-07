import * as babel from '@babel/core'
import { babelrc } from './babelrc'

const TRANSFORM_OPTIONS = { plugins: babelrc.plugins, presets: babelrc.presets }

export const compile = code => {
	const compiled = babel.transform(code, TRANSFORM_OPTIONS)
	return compiled.code
}
