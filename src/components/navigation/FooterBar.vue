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