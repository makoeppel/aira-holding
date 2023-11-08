<template>
	<v-bottom-navigation
		class="d-md-none">
		<v-container>
			<v-row>
				<v-col v-for="navigationTarget in filteredNavigationTargets" :key="navigationTarget.key">
					<v-btn
						:to="navigationTarget.to">
						<v-icon>{{ navigationTarget.icon }}</v-icon>
						{{ $t(navigationTarget.text) }}
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-bottom-navigation>
</template>
<script setup lang="ts">
	import { VBottomNavigation, VBtn, VIcon } from 'vuetify/lib/components/index.mjs';
	import { navigationTargets } from './NavigationBar.vue';

	const filteredNavigationTargets = navigationTargets.filter((oNavigationTarget) => {
		return oNavigationTarget.usage.includes("bottom");
	})
</script>