<template>
  <v-app-bar
    scroll-behavior="elevate"
    floating
  >
    <home-button />

    <v-spacer class="d-md-none" />

    <v-btn
      v-for="navigationTarget in filteredNavigationTarget"
      :key="navigationTarget.key"
      class="text-none mx-1 d-none d-md-inline-flex"
      :variant="navigationTarget.variant"
      :to="navigationTarget.to"
    >
      {{ $t(navigationTarget.text) }}
    </v-btn>

    <v-btn
      class="text-none ml-2 d-none d-md-inline-flex"
      color="primary"
      variant="flat"
      :to="{ name: 'contact' }"
    >
      {{ $t('buttons.contact') }}
    </v-btn>

    <!-- Mobile menu -->
    <v-menu
      location="bottom end"
      class="d-md-none"
    >
      <template #activator="{ props }">
        <v-app-bar-nav-icon
          v-bind="props"
          class="d-md-none"
          :aria-label="$t('buttons.menuNav')"
        />
      </template>
      <v-list
        min-width="220"
        nav
      >
        <v-list-item
          :to="{ name: 'home' }"
          :title="$t('buttons.homeNav')"
          prepend-icon="mdi-home-outline"
        />
        <v-list-item
          v-for="navigationTarget in filteredNavigationTarget"
          :key="navigationTarget.key"
          :to="navigationTarget.to"
          :title="$t(navigationTarget.text)"
          :prepend-icon="navigationTarget.icon || undefined"
        />
        <v-list-item
          :to="{ name: 'contact' }"
          :title="$t('buttons.contact')"
          prepend-icon="mdi-email-outline"
        />
      </v-list>
    </v-menu>

    <responsive-button
      v-for="responsiveNavigationTarget in responsiveNavigationTargets"
      :key="responsiveNavigationTarget.key"
      :text="$t(responsiveNavigationTarget.text)"
      :icon="responsiveNavigationTarget.icon"
      :color="responsiveNavigationTarget.color"
      :variant="responsiveNavigationTarget.variant"
      :to="responsiveNavigationTarget.to"
    />
  </v-app-bar>
</template>
<script lang="ts" setup>
	import { VAppBar, VBtn, VSpacer, VMenu, VList, VListItem, VAppBarNavIcon } from 'vuetify/lib/components/index.mjs';
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
		to: object,
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
			text: "buttons.aboutNav",
			key: "about",
			to: { name: "about" },
			icon: "mdi-account-group-outline",
			usage: ["navigation"],
			variant: "text"
		},
		{
			text: "buttons.servicesNav",
			key: "services",
			to: { name: "services" },
			icon: "mdi-briefcase-outline",
			usage: ["navigation"],
			variant: "text"
		},
		{
			text: "buttons.projectsNav",
			key: "projects",
			to: { name: "projects" },
			icon: "mdi-flask-outline",
			usage: ["navigation"],
			variant: "text"
		},
		{
			text: "buttons.blogNav",
			key: "blog",
			to: { name: "blog" },
			icon: "mdi-post-outline",
			usage: ["navigation"],
			variant: "text"
		},
		{
			text: "buttons.sensorCloud",
			key: "sensorCloud",
			to: { name: "sensorCloud" },
			icon: "mdi-cloud-outline",
			usage: ["navigation", "footer"],
			variant: "text"
		},
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
		{
			text: "buttons.contact",
			key: "contact",
			to: { name: "contact" },
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