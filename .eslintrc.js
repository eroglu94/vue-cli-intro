module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-v-for-key': 'warn',
    'vue/no-unused-vars' : 'warn',
    'vue/valid-v-for' : 'warn',
    'vue/no-unused-components' : 'warn',
    'no-unused-vars' : 'warn',
  }
}
