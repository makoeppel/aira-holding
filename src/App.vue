<script lang="ts" setup>
	import { RouterView } from 'vue-router'
  	import NavigationBar from '@/components/navigation/NavigationBar.vue'
	import BottomBar from '@/components/navigation/BottomBar.vue'
	import FooterBar from '@/components/navigation/FooterBar.vue'
</script>

<template>
	<v-app>
		<NavigationBar></NavigationBar>
		<v-main>
			<v-container class="height-screen" fluid>
				<RouterView />
			</v-container>
		</v-main>
		<BottomBar></BottomBar>
		<FooterBar></FooterBar>
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