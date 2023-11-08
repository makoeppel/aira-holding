import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VApp, VMain, VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs'
import { i18nAdapter } from '@/lang'

const vuetify = createVuetify({
	components: {
		VApp, VMain, VContainer, VRow, VCol
	},
    locale: {
		adapter: i18nAdapter,
	}
})

export default vuetify;