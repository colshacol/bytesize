export const babelrc = {
	presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-flow'],
	plugins: [
		'@babel/plugin-proposal-decorators',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-pipeline-operator',
		'@babel/plugin-proposal-function-bind',
		'@babel/plugin-proposal-numeric-separator',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-do-expressions',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-function-sent',
		'@babel/plugin-proposal-throw-expressions',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-async-generator-functions',
		'@babel/plugin-proposal-optional-catch-binding',
		'@babel/plugin-proposal-unicode-property-regex',
		'@babel/plugin-proposal-nullish-coalescing-operator',
		'@babel/plugin-proposal-logical-assignment-operators',
		require('./loopControl'),
		[
			'@babel/plugin-proposal-class-properties',
			{
				loose: true
			}
		]
	]
}
