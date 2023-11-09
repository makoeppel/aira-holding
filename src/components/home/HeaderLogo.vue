<template>
	<IconComponentDark v-if="theme.current.value.dark"></IconComponentDark>
	<IconComponentLight v-else></IconComponentLight>
</template>
<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useTheme } from 'vuetify';

	const theme = useTheme()

	const IconComponentLight = defineAsyncComponent({
		loader: () => import('@/assets/logo.svg?component')
	});

	const IconComponentDark = defineAsyncComponent({
		loader: () => import('@/assets/logo_dark.svg?component')
	});

</script>