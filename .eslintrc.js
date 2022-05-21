const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
  (acc, rule) => {
    acc[`jsx-a11y/${rule}`] = 'off';
    return acc;
  },
  {},
);

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    fetch: false,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    ...a11yOff,
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/display-name': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      "files": [
        "**/*.test.js",
        "**/*.test.jsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
