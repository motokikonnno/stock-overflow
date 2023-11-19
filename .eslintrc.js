module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'prettier'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': [
      'error',
      {
        // 名前付き引数をどこまでチェックするか
        args: 'after-used',
        // アンダースコアで書けば無視
        argsIgnorePattern: '^_',
      },
    ],
    semi: ['error', 'always'],
    'prefer-arrow-callback': 'error',

    // import-orderルール
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // typescriptルール
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      // _で始まる変数、引数は除外
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    // 不要な三項演算子は警告。引数にも適用
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
    // { aaa: aaa }を{ aaa }に強制
    'object-shorthand': ['warn', 'always'],
    complexity: ['warn', 10],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],

  // .config.jsと .d.ts で終わるファイルeslintの対象から除外
  ignorePatterns: ['*.config.js', '*.config.ts', '*.d.ts'],
};
