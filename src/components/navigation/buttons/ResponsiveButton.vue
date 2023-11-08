<template>
	<v-btn v-if="isSmallScreen"
		class="text-none"
		:prepend-icon="icon"
		:color="color"
		stacked
		variant="text">
		{{ text }}
	</v-btn>
	<v-btn v-else
		class="text-none mx-sm-2"
		rounded="0"
		:variant="variant"
		:color="color">
		{{ text }}
	</v-btn>
</template>
<script setup lang="ts">
	import { VBtn } from 'vuetify/lib/components/index.mjs';
	import { isSmallScreen } from '@/App.vue';

	export interface Props {
		text: string,
		icon: string,
		color: string,
		variant: NonNullable<"text" | "outlined" | "flat" | "elevated" | "tonal" | "plain">,
		to: object
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const props = withDefaults(defineProps<Props>(), {
		color: "",
		variant: "outlined"
	})
</script>