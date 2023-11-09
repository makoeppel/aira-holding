<script lang="ts" setup>
	import IconComponent from '@/assets/logo.svg?component';
	import IconComponentDark from '@/assets/logo_dark.svg?component';
	import { VDivider } from "vuetify/lib/components/index.mjs";
	import { useTheme } from 'vuetify';
	import type { TeamMember as TeamMemberType } from '@/components/TeamMember.vue';
	import TeamMember from '@/components/TeamMember.vue';

	const theme = useTheme()

	const teamMembers:TeamMemberType[] = [
		{
			name: "Marius Köppel",
			imgSrc: "/profiles/marius.png",
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
			imgSrc: "/profiles/tobias.jpeg",
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
			imgSrc: "/profiles/marvin.png",
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
				<IconComponentDark v-if="theme.current.value.dark" height="100px"></IconComponentDark>
				<IconComponent v-else height="100px"></IconComponent>
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
					<v-col v-for="(member, index) in teamMembers" :key="index" class="text-center" md="4" cols="12">
						<TeamMember v-bind="member"></TeamMember>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
