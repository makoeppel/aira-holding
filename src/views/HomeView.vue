<script lang="ts" setup>
    import IconComponent from '@/assets/logo.svg?component';
	import { VAvatar, VImg, VBtn } from "vuetify/lib/components/index.mjs";
	import { ref } from "vue";

	type SocialMedia = {
		icon: string;
		href: string;
	}

	type Founder = {
		name: string;
		imgSrc: string;
		socials?: SocialMedia[]
	}

	const imagePath = "/src/assets/profiles";

	const founders:Founder[] = [
		{
			name: "Marius Köppel",
			imgSrc: `${imagePath}/marius.png`,
			socials: [
				{
					icon: "mdi-github",
					href: "https://github.com/makoeppel"
				},
				{
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/marius-k%C3%B6ppel-b0a2b915b/"
				}
			]
		},
		{
			name: "Marvin Schneider",
			imgSrc: `${imagePath}/marvin.png`,
			socials: [
				{
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/marvin-schneider-a4b6b4131/"
				}
			]
		},
		{
			name: "Tobias Schweitzer",
			imgSrc: `${imagePath}/tobias.jpeg`,
			socials: [
				{
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/tobias-schweitzer-at-aira/"
				}
			]
		}
	];

</script>

<template>

    <v-row class="text-center">
        <v-col cols="12">
			<IconComponent height="100px"></IconComponent>
        </v-col>
    </v-row>

    <v-row justify="center">
        <v-col v-for="(founder, index) in founders" :key="index" class="text-center">
			<v-container fluid>
				<v-row>
					<v-col>
						<v-avatar size="x-large">
							<v-img
								:src="founder.imgSrc"
								:alt="`Profile picture of ${founder.name}`"></v-img>
						</v-avatar>
					</v-col>
				</v-row>
				<v-row>
					<v-col>{{ founder.name }}</v-col>
				</v-row>
				<v-row v-if="founder.socials" justify="center">
					<v-col v-for="(social, socialIndex) in founder.socials" :key="`${index}-${socialIndex}`" cols="3">
						<v-btn
							:icon="social.icon"
							:href="social.href"></v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-col>
    </v-row>

</template>
