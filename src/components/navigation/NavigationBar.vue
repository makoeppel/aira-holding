<template>
	<v-app-bar scroll-behavior="elevate" floating>
		<home-button></home-button>

		<v-btn v-for="navigationTarget in filteredNavigationTarget" v-bind:key="navigationTarget.key"
			class="text-none mx-2 d-none d-md-inline-flex" :variant="navigationTarget.variant" :to="navigationTarget.to">
			{{ $t(navigationTarget.text) }}
		</v-btn>

		<responsive-button v-for="responsiveNavigationTarget in responsiveNavigationTargets"
			v-bind:key="responsiveNavigationTarget.key" :text="$t(responsiveNavigationTarget.text)"
			:icon="responsiveNavigationTarget.icon" :color="responsiveNavigationTarget.color"
			:variant="responsiveNavigationTarget.variant" :to="responsiveNavigationTarget.to">
		</responsive-button>
	</v-app-bar>
</template>
<script lang="ts" setup>
	import { VAppBar, VBtn } from 'vuetify/lib/components/index.mjs';
	import { defineAsyncComponent } from 'vue';

	const HomeButton = defineAsyncComponent(() => import("@/components/navigation/buttons/HomeButton.vue"))

	const ResponsiveButton = defineAsyncComponent(() => import('@/components/navigation/buttons/ResponsiveButton.vue'))

	const filteredNavigationTarget = navigationTargets.filter((oNavigationTarget) => {
		return oNavigationTarget.usage.includes("navigation");
	})
</script>
<script lang="ts">
	export interface NavigationTarget {
		text: string,
		to: Object,
		key: string,
		icon: string,
		usage: string[],
		variant: NonNullable<"text" | "outlined" | "flat" | "elevated" | "tonal" | "plain">,
		color?: string
	}

	export const responsiveNavigationTargets: NavigationTarget[] = [
		/*
		{
			text: "buttons.becomeMember",
			icon: "mdi-account-heart",
			color: "primary",
			variant: "flat",
			key: "mitglied",
			to: {},
			usage: ["navigation"]
		},
		{
			text: "buttons.support",
			icon: "mdi-hand-coin",
			color: "",
			variant: "outlined",
			key: "support",
			to: {},
			usage: ["navigation"]
		}
		*/
	];

	export const navigationTargets: NavigationTarget[] = [
		/*
		{
			text: "buttons.contact",
			to: { name: 'contact' },
			key: "contact",
			icon: "mdi-human-greeting-proximity",
			usage: ["navigation", "bottom"],
			variant: "text"
		},
		*/
		{
			text: "buttons.imprint",
			key: "imprint",
			to: { name: "imprint" },
			icon: "",
			usage: ["footer"],
			variant: "text"
		},
		{
			text: "buttons.gep",
			key: "gep",
			to: { name: "gep" },
			icon: "",
			usage: ["footer"],
			variant: "text"
		},
		/*
		{
			text: "buttons.dataSecurity",
			key: "dataSecurity",
			to: { name: "dataSecurity" },
			icon: "",
			usage: ["footer"],
			variant: "text"
		}
		*/
	]
</script>
<style>
.v-toolbar>div {
	justify-content: center;
}
</style>