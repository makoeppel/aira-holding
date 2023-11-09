<script lang="ts" setup>
	import { RouterView } from 'vue-router'
	import NavigationBar from '@/components/navigation/NavigationBar.vue'
	import { VLazy } from 'vuetify/lib/components/index.mjs'
	import { onMounted } from 'vue'
	import { useMainStorage } from '@/store/main'
	import { useTheme } from 'vuetify/lib/framework.mjs'
	import { defineAsyncComponent } from 'vue'

	const main = useMainStorage()

	const theme = useTheme()

	onMounted(() => {
		const oSettings = main.getSettings;
		if (oSettings && oSettings.dark === undefined) {
			oSettings.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			main.changeSettings(oSettings);
		}
		theme.global.name.value = oSettings.dark ? 'dark' : 'light';
	})

	const BottomBarComponent = defineAsyncComponent({
		loader: () => import('@/components/navigation/BottomBar.vue')
	});

	const FooterBarComponent = defineAsyncComponent({
		loader: () => import('@/components/navigation/FooterBar.vue')
	})
</script>

<template>
	<v-app>
		<NavigationBar></NavigationBar>
		<v-main>
			<v-container class="height-screen" fluid>
				<RouterView />
			</v-container>
		</v-main>
		<v-lazy
			:options="{'threshold':0.5}"
			min-height="60px">
			<BottomBarComponent v-if="false"></BottomBarComponent>
			<FooterBarComponent></FooterBarComponent>
		</v-lazy>
	</v-app>
</template>

<script lang="ts">
	import { useMediaQuery } from '@vueuse/core'

	export const isSmallScreen = useMediaQuery("(max-width: 959px)");

	export const isMediumScreen = useMediaQuery("(max-width: 1279px)");

	export const isLargeScreen = useMediaQuery("(max-width: 1919px)");
</script>

<style>
	.height-screen {
		min-height: calc(100vh - var(--v-layout-top));
	}

	@media screen and (max-width: 959px) {
		.height-screen {
			min-height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom));
		}
	}

</style>