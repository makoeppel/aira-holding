import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { i18n } from '@/lang'
// Types
import type { App } from 'vue'

router.beforeEach((to) => {
	document.title = i18n.global.t("pageTitles." + to.name?.toString());
})

export function registerPlugins (app: App) {
	app
        .use(i18n)
		.use(vuetify)
		.use(router)
		.use(pinia)
}