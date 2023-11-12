import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import deDe from '@/lang/i18n/de-De'
import enUs from '@/lang/i18n/en-Us'
import type { LocaleInstance } from 'vuetify/lib/framework.mjs'

const messages = {
	"de-De": deDe,
	"en-Us": enUs
}

const i18n = createI18n({
	legacy: false,
	locale: 'de-De',
	fallbackLocale: 'de-De',
	messages,
})

const i18nAdapter: LocaleInstance = createVueI18nAdapter({ i18n, useI18n })

export { i18n, i18nAdapter}