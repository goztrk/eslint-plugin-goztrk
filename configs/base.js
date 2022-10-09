module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [
    'import',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/order': ['error', {
      pathGroups: [
        {
          pattern: '@/**',
          group: 'external',
          position: 'after',
        },
      ],
    }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
