module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      '@babel/preset-react',
      ['@babel/preset-env', { modules: false }],
      '@babel/preset-flow'
    ],
    plugins: [
      [
        'babel-plugin-react-css-modules',
        {
          generateScopedName: '[path]-[name]-[local]',
          handleMissingStyleName: 'warn',
          context: './src'
        }
      ],
      'react-hot-loader/babel',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ],
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
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-logical-assignment-operators',
      'babel-plugin-jsx-control-statements',
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ],
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
          alias: {
            '#components': './src/components',
            '#utilities': './src/utilities',
            '#scenes': './src/scenes',
            '#styles': './src/styles',
            '#features': './src/features',
            '#stores': './src/stores',
            '#assets': './src/assets',
            '#state': './src/state'
          }
        }
      ],
      'babel-plugin-dev-expression',
      [
        'babel-plugin-flow-runtime',
        {
          assert: true,
          annotate: true
        }
      ]
    ]
  }
}
