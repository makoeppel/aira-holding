<template>
	<v-btn v-if="isSmallScreen && false"
		:to="{ name: 'home'}"
		class="text-none"
		variant="text"
		:active="false"
		size="x-large"
		:aria-label="$t('buttons.navigateToHome')">
		<v-icon v-if="theme.current.value.dark">
			<IconComponentDark></IconComponentDark>
		</v-icon>
		<v-icon v-else>
			<IconComponent ></IconComponent>
		</v-icon>
	</v-btn>
	<v-btn v-else
		:to="{ name: 'home'}"
		class="text-none"
		variant="text"
		:active="false"
		size="x-large"
		:aria-label="$t('buttons.navigateToHome')">
		<span>
			AIRA Holding GmbH
		</span>
	</v-btn>
</template>
<script setup lang="ts">
	import { VBtn, VIcon } from 'vuetify/lib/components/index.mjs';
	import { isSmallScreen } from '@/App.vue';
	import IconComponent from '@/assets/logo.svg?component'
	import IconComponentDark from '@/assets/logo_dark.svg?component'
	import { useTheme } from 'vuetify';

	const theme = useTheme()
</script>