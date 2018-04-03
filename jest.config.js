module.exports = {
	setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
	automock: false,
	browser: true,
	verbose: false,
	silent: true,
	testMatch: ['**/_tests/*.t.js'],
	setupFiles: ['./jest/index.js'],
	testPathIgnorePatterns: ['/node_modules/', './.remmy'],
	moduleNameMapper: {
		'\\.(css|svg)': 'identity-obj-proxy',
		'^react$': '<rootDir>/node_modules/react'
	},
	transform: {
		'^.+\\.jsx?$': 'babel-jest'
	}
}
