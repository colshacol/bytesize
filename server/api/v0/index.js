import express from 'express'
import prettier from 'prettier'
import { database } from '#database'

const router = express.Router()

router.get('/user/:userName', (req, res, next) => {
	database.users.find({ userName: req.params.userName }, (err, data) => {
		res.send(data[0])
	})
})

router.get('/module/:userName/:id', (req, res, next) => {
	database.users.find({ userName: req.params.userName }, (err, data) => {
		res.send({
			module: data[0].modules.find(m => {
				return m.uid == req.params.id
			})
		})
	})
})

export const DEFAULT_CONFIG = {
	parser: 'babylon',
	tabWidth: 2,
	trailingComma: 'none',
	printWidth: 80,
	singleQuote: true,
	semi: true,
	arrowParens: 'always',
	jsxBracketSameLine: false,
	bracketSpacing: true,
	useTabs: true
}

export const mergedConfig = (config = {}) => {
	return {
		...DEFAULT_CONFIG,
		...config
	}
}

router.post('/prettier', async (req, res, next) => {
	const { code, config } = req.body

	res.json({
		code: prettier.format(code, mergedConfig(config)),
		error: null
	})
})

export { router }
