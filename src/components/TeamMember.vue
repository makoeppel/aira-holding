<template>
	<v-container fluid>
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
					:href="social.href"></v-btn>
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

	export type SocialMedia = {
		icon: string;
		href: string;
	}

	export type TeamMember = {
		name: string;
		imgSrc: string;
		socials?: SocialMedia[],
		paragraph: string
	}

	export interface Props extends TeamMember {}


	const props = defineProps<Props>();

</script>