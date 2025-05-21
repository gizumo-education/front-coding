import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslint from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  eslintConfigPrettier,
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      'eslint.config.mjs',
    ],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    ...jsxA11y.flatConfigs.recommended,
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/button-has-type': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      'arrow-body-style': 'off',
      'no-console': 'error',
      'func-names': 'off',
      'prefer-arrow-callback': 'off',
      camelcase: [
        'error',
        {
          ignoreImports: true,
        },
      ],
    },
  },
])

export default eslintConfig
