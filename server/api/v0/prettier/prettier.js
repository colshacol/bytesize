import express from 'express'
import _prettier from 'prettier'

import { DEFAULT_CONFIG } from './consts'

export const mergedConfig = (config = {}) => {
	return {
		...DEFAULT_CONFIG,
		...config
	}
}

export const prettier = async (req, res, next) => {
	const { code, config } = req.body

	res.json({
		code: _prettier.format(code, mergedConfig(config)),
		error: null
	})
}
