<template>
	<v-bottom-navigation
		class="d-md-none">
		<v-btn
			v-for="navigationTarget in filteredNavigationTarget"
			v-bind:key="navigationTarget.key"
			:to="navigationTarget.to">
			<v-icon>{{ navigationTarget.icon }}</v-icon>
			{{ $t(navigationTarget.text) }}
		</v-btn>

	</v-bottom-navigation>
</template>
<script setup lang="ts">
	import { VBottomNavigation, VBtn, VIcon } from 'vuetify/lib/components/index.mjs';
	import { navigationTargets } from './NavigationBar.vue';

	const filteredNavigationTarget = navigationTargets.filter((oNavigationTarget) => {
		return oNavigationTarget.usage.includes("bottom");
	})

</script>