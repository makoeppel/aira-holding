<template>
	<v-container fluid class="px-0">
		<v-row justify="center">
			<v-col cols="12">
				<v-avatar size="x-large">
					<v-img
						:src="imgSrc"
						:alt="`Profile picture of ${name}`"></v-img>
				</v-avatar>
			</v-col>
			<v-col cols="12" class="py-0">{{ name }}</v-col>
			<v-col v-for="(social, socialIndex) in socials" :key="`${name}-${socialIndex}`"
				cols="3" class="py-0">
				<v-btn
					variant="plain"
					:icon="social.icon"
					:href="social.href"
					:aria-label="`Link to ${social.plattformName} profile of ${name}`"></v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<p class="text-left">{{ $t(paragraph) }}</p>
			</v-col>
		</v-row>
	</v-container>
</template>
<script setup lang="ts">
	import { VAvatar, VImg, VBtn } from "vuetify/lib/components/index.mjs";

	export interface Props extends TeamMemberType {}

	const props = defineProps<Props>();

</script>
<script lang="ts">

	export type SocialMedia = {
		plattformName: string;
		icon: string;
		href: string;
	}

	export type TeamMemberType = {
		name: string;
		imgSrc: string;
		socials?: SocialMedia[],
		paragraph: string
	}

	export const TeamMembers:TeamMemberType[] = [
	{
			name: "Marius Köppel",
			imgSrc: "/profiles/marius.png",
			paragraph: "home.team.members.marius",
			socials: [
				{
					plattformName: "GitHub",
					icon: "mdi-github",
					href: "https://github.com/makoeppel"
				},
				{
					plattformName: "LinkedIn",
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/marius-k%C3%B6ppel-b0a2b915b/"
				}
			]
		},
		{
			name: "Tobias Schweitzer",
			imgSrc: "/profiles/tobias.jpeg",
			paragraph: "home.team.members.tobias",
			socials: [
				{
					plattformName: "LinkedIn",
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/tobias-schweitzer-at-aira/"
				}
			]
		},
		{
			name: "Marvin Schneider",
			imgSrc: "/profiles/marvin.png",
			paragraph: "home.team.members.marvin",
			socials: [
				{
					plattformName: "LinkedIn",
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/marvin-schneider-a4b6b4131/"
				}
			]
		}
	]

</script>