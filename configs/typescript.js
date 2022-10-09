module.export = {
  extends: [
    require.resolve('./base.js'),
    'airbnb-typescript',
  ],
  parserOptions: {
    project: ['**/tsconfig.json', '**/tsconfig.*.json'],
    ecmaVersion: 2022,
  },
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: [
          '.ts',
          '.json',
        ],
      },

      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
        project: [
          '**/tsconfig.json',
          '**/tsconfig.*.json',
        ],
      },
    },

    // A list of file extensions that will be parsed as modules and inspected for exports.
    'import/extensions': ['.mjs', '.js', '.jsx', '.mts', '.ts', '.tsx'],

    'import/external-module-folders': ['node_modules', 'node_modules/@types'],

    'import/parsers': {
      '@typescript-eslint/parser': ['.mts', '.ts', '.tsx', '.d.ts'],
    },
  },
  overrides: [
    // Some config files can only be written in JS.
    // But this config is expected to be used in a TypeScript-only environment by default.
    // We don't expect these JS config files to be included in any TypeScript projects
    // (i.e. `tsconfig.json`s).
    // So we add the following rule,
    // to avoid the error "The file must be included in at least one of the projects provided",
    {
      files: ['.eslintrc.*js', 'babel.config.*js', 'vue.config.*js'],
      parser: 'espree',
      env: {
        node: true,
      },
    },
  ],
};
