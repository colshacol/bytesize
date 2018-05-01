const webpack = require('webpack')
const path = require('path')
const { loaders } = require('./loaders')

require('dotenv').config()

const output = {
	filename: 'bundle.js',
	path: path.resolve(process.cwd(), '/dist/')
}

const externals = {
	react: 'React',
	'react-dom': 'ReactDOM',
	moment: 'moment',
	codemirror: 'CodeMirror'
}

const module = {
	// TODO: Provide process.env.
	rules: loaders('development')
}

export const config = {
	entry: ['react-hot-loader/patch', './src/index.js'],
	devtool: 'source-map',
	mode: 'development',
	// externals,
	output,
	module
}
