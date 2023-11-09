/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    "plugin:tailwindcss/recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'tailwindcss/no-custom-classname': 0,
  },
  plugins: [
    "vue",
    "tailwindcss"
  ],
}
