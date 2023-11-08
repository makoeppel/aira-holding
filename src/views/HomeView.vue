<script lang="ts" setup>
	import IconComponent from '@/assets/logo.svg?component';
	import { VAvatar, VImg, VBtn, VDivider } from "vuetify/lib/components/index.mjs";

	type SocialMedia = {
		icon: string;
		href: string;
	}

	type Member = {
		name: string;
		imgSrc: string;
		socials?: SocialMedia[],
		paragraph: string
	}

	const imagePath = "/src/assets/profiles";

	const teamMembers:Member[] = [
		{
			name: "Marius Köppel",
			imgSrc: `${imagePath}/marius.png`,
			paragraph: "home.team.members.marius",
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
			name: "Tobias Schweitzer",
			imgSrc: `${imagePath}/tobias.jpeg`,
			paragraph: "home.team.members.tobias",
			socials: [
				{
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/tobias-schweitzer-at-aira/"
				}
			]
		},
		{
			name: "Marvin Schneider",
			imgSrc: `${imagePath}/marvin.png`,
			paragraph: "home.team.members.marvin",
			socials: [
				{
					icon: "mdi-linkedin",
					href: "https://www.linkedin.com/in/marvin-schneider-a4b6b4131/"
				}
			]
		}
	];

</script>

<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<IconComponent height="100px"></IconComponent>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<h2>{{ $t("home.companyPurpose.title") }}</h2>
			</v-col>
			<v-col cols="12">
				<v-row>
					<v-col md="4" cols="12">
						<h3><u>{{ $t("home.companyPurpose.whyWeExist.title") }}</u></h3>
						<p>
							{{ $t("home.companyPurpose.whyWeExist.paragraph") }}
						</p>
					</v-col>
					<v-col md="4" cols="12">
						<h3><u>{{ $t("home.companyPurpose.howWeDoIt.title") }}</u></h3>
						<p>
							{{ $t("home.companyPurpose.howWeDoIt.paragraph") }}
						</p>
					</v-col>
					<v-col md="4" cols="12">
						<h3><u>{{ $t("home.companyPurpose.whatWeDo.title") }}</u></h3>
						<p>
							{{ $t("home.companyPurpose.whatWeDo.paragraph") }}
						</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-row class="py-5">
			<v-divider></v-divider>
		</v-row>
		<v-row>
			<v-col>
				<h2>{{ $t("home.team.title") }}</h2>
			</v-col>
			<v-col cols="12">
				<v-row justify="center">
					<v-col v-for="(member, index) in teamMembers" :key="index" class="text-center">
						<v-container fluid>
							<v-row>
								<v-col>
									<v-avatar size="x-large">
										<v-img
											:src="member.imgSrc"
											:alt="`Profile picture of ${member.name}`"></v-img>
									</v-avatar>
								</v-col>
							</v-row>
							<v-row>
								<v-col>{{ member.name }}</v-col>
							</v-row>
							<v-row v-if="member.socials" justify="center">
								<v-col v-for="(social, socialIndex) in member.socials" :key="`${index}-${socialIndex}`" cols="3">
									<v-btn
										variant="plain"
										:icon="social.icon"
										:href="social.href"></v-btn>
								</v-col>
							</v-row>
							<p class="text-left">{{ $t(member.paragraph) }}</p>
						</v-container>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
