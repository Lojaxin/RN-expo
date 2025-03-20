module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-native/all',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'react-native', '@typescript-eslint', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react-native/no-color-literals': 'off',
        'react-native/sort-styles': 'off',
        'react/prop-types': 'off',
        'react-native/no-inline-styles': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                tabWidth: 4,
            },
        ],
        quotes: ['error', 'single'],
        indent: 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        'react-native/react-native': true,
    },
    ignorePatterns: ['node_modules/', '.expo/', 'dist/'],
};
