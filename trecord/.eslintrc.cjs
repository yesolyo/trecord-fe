module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true 
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
              'project': './tsconfig.json'
            },
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
    },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
    'rules': {
      "import/no-unresolved": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "arrow-body-style": ["error", "as-needed"],
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  }
};
