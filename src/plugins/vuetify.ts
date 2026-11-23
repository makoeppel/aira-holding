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
	},
	// Neo-brutalist palette, sampled from the AIRA logo and team portraits
	theme: {
		themes: {
			light: {
				dark: false,
				colors: {
					background: '#F2EADB',
					surface: '#FBF6EC',
					'on-background': '#1A1A1A',
					'on-surface': '#1A1A1A',
					primary: '#DA7C75',
					'on-primary': '#1A1A1A',
					secondary: '#DEC593',
					'on-secondary': '#1A1A1A',
					accent: '#26285A',
					error: '#CC5A1E'
				}
			},
			dark: {
				dark: true,
				colors: {
					background: '#1A1A1A',
					surface: '#242220',
					'on-background': '#F2EADB',
					'on-surface': '#F2EADB',
					primary: '#DA7C75',
					'on-primary': '#1A1A1A',
					secondary: '#DEC593',
					'on-secondary': '#1A1A1A',
					accent: '#909DAA',
					error: '#CC5A1E'
				}
			}
		}
	},
	defaults: {
		VBtn: { rounded: 0, elevation: 0 },
		VChip: { rounded: 0 },
		VCard: { rounded: 0 }
	}
})

export default vuetify;