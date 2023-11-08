import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export interface Settings {
	dark: boolean,
	local: string
}

export const useMainStorage = defineStore({
	id: 'main',
	state: () => ({
		settings: useStorage('settings', {} as Settings),
	}),
	getters: {
		getSettings(): Settings {
			return this.settings
		}
	},
	actions: {
		changeSettings(oSettings: Settings): void {
			this.settings = oSettings;
		}
	}
})