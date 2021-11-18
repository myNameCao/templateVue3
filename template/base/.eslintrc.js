module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 禁止tab和 空格 混合使用
    'no-mixed-spaces-and-tabs': 2,
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 2,
    // 禁止不规则的空白。
    'no-irregular-whitespace': 2,
    // 字符串开头和结束使用单引号
    quotes: [2, 'single'],
    // 禁止冗余的括号
    'no-extra-parens': 2,
    // console
    'no-console': process.env.VUE_APP_ENV === 'production' ? 0 : 1,
    // alert、confirm 和 prompt
    'no-alert': 1,
    // 使用 node 全局变量 global
    'no-undef': 1,
    //  vue内部 script 规则
    // 强制在 function 的左括号之前没有空格
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // allow async-await
    'generator-star-spacing': 0,
    // Disallow or enforce spaces inside of parentheses
    'space-in-parens': 2,

    semi: ['error', 'never'],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 1, switchCase: 1, ignores: [] }
    ],
    //  vue内部 html 规则
    'vue/html-indent': [
      1,
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/multiline-html-element-content-newline': [
      2,
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'VueComponent'],
        allowEmptyLines: true
      }
    ],
    'vue/html-self-closing': [
      1,
      {
        html: { normal: 'never', void: 'always' },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
    // "vue/html-quotes": [2, "single", { "avoidEscape": true } ],
  }
}
