module.exports = {
    'env': {
        'es6': true
    },
    'extends': [
        'airbnb', 'prettier', 'prettier/react'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        '__DEV__': 'readonly',
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'prettier', 'react-hooks'
    ],
    'rules': {
      'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'no-param-reassign': [2, {'props': false}],
    'react/state-in-constructor': ['error', 'never'],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
    }
};
