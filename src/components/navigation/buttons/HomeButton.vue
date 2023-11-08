<template>
	<v-btn v-if="isSmallScreen && false"
		:to="{ name: 'home'}"
		class="text-none"
		variant="text"
		:active="false"
		size="x-large"
		:aria-label="$t('buttons.navigateToHome')">
		<icon-component></icon-component>
	</v-btn>
	<v-btn v-else
		:to="{ name: 'home'}"
		class="text-none"
		variant="text"
		:active="false"
		size="x-large"
		:aria-label="$t('buttons.navigateToHome')">
		<template v-slot:prepend>
			<v-icon v-if="theme.current.value.dark">
				<icon-component-dark></icon-component-dark>
			</v-icon>
			<v-icon v-else>
				<IconComponent ></IconComponent>
			</v-icon>
		</template>
		<span>
			AIRA Holding GmbH
		</span>
	</v-btn>
</template>
<script setup lang="ts">
	import { VBtn, VIcon } from 'vuetify/lib/components/index.mjs';
	import { isSmallScreen } from '@/App.vue';
	import IconComponent from '@/assets/logo.svg?component'
	//import IconComponentDark from '@/assets/IconLogo_dark.svg?component'
	import { useTheme } from 'vuetify';

	const theme = useTheme()
</script>