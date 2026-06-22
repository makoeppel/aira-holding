<template>
	<v-footer
		border
		class="bg-grey-lighten-2 footer">
		<v-container>
			<v-row>
				<v-col
					class="text-center"
					col="2">
					<v-btn
						v-for="footerTarget in filteredNavigationTarget"
						v-bind:key="footerTarget.key"
						class="text-none mx-2"
						:variant="footerTarget.variant"
						:to="footerTarget.to">
							{{ $t(footerTarget.text) }}
					</v-btn>
					<settings-button class="text-none"></settings-button>
				</v-col>
			</v-row>
			<v-row justify="center" class="mb-6">
                <v-col cols="auto" class="text-center py-0">
                    <div class="social-connect-container">
                        <span class="social-label">Connect with us</span>
                        <v-btn
                            variant="plain"
                            icon="mdi-linkedin"
                            href="https://www.linkedin.com/company/aira-holding-gmbh/"
                            target="_blank"
                            rel="noopener"
                            aria-label="Visit AIRA Holding LinkedIn page"
                            class="footer-social-btn"></v-btn>
                    </div>
                </v-col>
            </v-row>
			<v-row>
				<v-col class="text-center" cols="12">
					{{ new Date().getFullYear() }} — <strong>AIRA Holding GmbH</strong>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>
<script setup lang="ts">
	import { VFooter, VBtn } from 'vuetify/lib/components/index.mjs';
	import { navigationTargets } from './NavigationBar.vue';
	import { defineAsyncComponent } from 'vue';

	const filteredNavigationTarget = navigationTargets.filter((oNavigationTarget) => {
		return oNavigationTarget.usage.includes("footer");
	})

	const SettingsButton = defineAsyncComponent(() => import('@/components/navigation/buttons/SettingsButton.vue'))

</script>
<style scoped>

	@media only screen and (max-width: 959px) {
		.footer {
			padding-bottom: 56px;
		}
	}

</style>