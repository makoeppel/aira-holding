// eslint.config.js
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default [
  // Global ignores (files you don't want to lint)
  {
    ignores: ['dist/**', 'node_modules/**', '.nuxt/**', '.output/**']
  },
  
  // Base TypeScript configs
  ...tseslint.configs.recommended,
  
  // Base Vue 3 configs
  ...pluginVue.configs['flat/recommended'],
  
  // Custom rule overrides
  {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    rules: {
      // Custom tweaks (e.g., changing warning levels)
      'vue/multi-word-component-names': 'off', // Handy for index.vue style names
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];