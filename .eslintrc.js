module.exports = {
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'prettier'],
    rules: {
        'vue/no-reserved-component-names': 'warn',
        'vue/multi-word-component-names': 'warn',
        'no-unsafe-optional-chaining': 'warn',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
}
