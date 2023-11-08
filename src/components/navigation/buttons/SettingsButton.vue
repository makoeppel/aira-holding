<template>
	<v-btn
		variant="text">
		{{ $t("buttons.settings")}}
		<v-menu
			activator="parent"
			:close-on-content-click="false">
			<v-list>
				<v-list-item>
					<v-switch
						v-model="settings.dark"
						true-icon="mdi-weather-night"
						false-icon="mdi-white-balance-sunny"
						inset
						:ripple="false">
						<template v-slot:label>
							{{ themeName }} Theme
						</template>
					</v-switch>
				</v-list-item>
				<!--
				<v-list-item>
					<v-switch
						v-model="settings.local"
						true-value="en"
						false-value="de"
						inset
						:ripple="false">
						<template v-slot:label>
							{{ languageName }}
						</template>
					</v-switch>
				</v-list-item>
				-->
			</v-list>
		</v-menu>
	</v-btn>
</template>
<script setup lang="ts">
	import { VBtn, VMenu, VList, VListItem, VSwitch } from 'vuetify/lib/components/index.mjs';
	import { computed, ref, onMounted, watch } from 'vue';
	import { useTheme } from 'vuetify';
	import { useI18n } from 'vue-i18n';
	import { type Settings, useMainStorage } from '@/store/main';

	const main = useMainStorage()

	const theme = useTheme()

	const settings = ref<Settings>(main.getSettings)

	onMounted(() => {
		const oSettings = main.getSettings
		if (oSettings) {
			settings.value = oSettings;
		} else {
			settings.value.dark = theme.current.value.dark;
		}
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) settings.value.dark = true;
		main.changeSettings(settings.value);
		theme.global.name.value = settings.value.dark ? 'dark' : 'light';
	})

	const themeName = computed(() => {
		return settings.value.dark ? "Dark" : "Light";
	})

	watch(() => settings.value.dark, () => {
		main.changeSettings(settings.value);
		theme.global.name.value = settings.value.dark ? 'dark' : 'light';
	})

	const languageName = computed(() => {
		return settings.value.local === "en" ? "English" : "Deutsch";
	})

	const i18n = useI18n()

	watch(() => settings.value.local, () => {
		main.changeSettings(settings.value);
		i18n.locale.value = settings.value.local;
	})

</script>