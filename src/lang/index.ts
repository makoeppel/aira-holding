import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import de from '@/lang/i18n/de'
//import en from '@/lang/i18n/en'
import type { LocaleInstance } from 'vuetify/lib/framework.mjs'

const messages = {
	de: de,
	//en: en
}

const i18n = createI18n({
	legacy: false,
	locale: 'de',
	fallbackLocale: 'de',
	messages,
})

const i18nAdapter: LocaleInstance = createVueI18nAdapter({ i18n, useI18n })

export { i18n, i18nAdapter}