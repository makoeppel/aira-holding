import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/aira-holding/",
	plugins: [
		vue(),
		VueI18nPlugin({
			include: path.resolve(__dirname, './src/lang/i18n/**'),
		}),
		svgLoader()
	],
	resolve: {
		alias: {
		'@': fileURLToPath(new URL('./src', import.meta.url)),
		'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
		}
	}
})
