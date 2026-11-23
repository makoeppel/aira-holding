import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {
	VApp, VMain, VContainer, VRow, VCol,
	VBtn, VIcon, VLazy, VDivider, VAvatar, VImg, VChip,
	VMenu, VList, VListItem, VAppBarNavIcon
} from 'vuetify/lib/components/index.mjs'
import { i18nAdapter } from '@/lang'

const vuetify = createVuetify({
	components: {
		VApp, VMain, VContainer, VRow, VCol,
		VBtn, VIcon, VLazy, VDivider, VAvatar, VImg, VChip,
		VMenu, VList, VListItem, VAppBarNavIcon
	},
	locale: {
		adapter: i18nAdapter,
	}
})

export default vuetify;