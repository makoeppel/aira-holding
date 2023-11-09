<script lang="ts" setup>
	import { defineAsyncComponent } from 'vue';
	import { TeamMembers, type TeamMemberType } from '@/components/home/TeamMember.vue';
	import { VLazy, VDivider } from 'vuetify/lib/components/index.mjs';
	import { CompanyPurposes, type CompanyPurposeType } from '@/components/home/CompanyPurpose.vue';

	const HeaderLogoComponent = defineAsyncComponent({
		loader: () => import('@/components/home/HeaderLogo.vue')
	});

	const CompanyPurposeComponent = defineAsyncComponent({
		loader: () => import('@/components/home/CompanyPurpose.vue')
	});

	const companyPurposes: CompanyPurposeType[] = CompanyPurposes;

	const TeamMemberComponent = defineAsyncComponent({
		loader: () => import('@/components/home/TeamMember.vue')
	});

	const teamMembers:TeamMemberType[] = TeamMembers

</script>
<template>
	<v-container class="py-0" fluid>
		<v-lazy
			:options="{'threshold':0.5}"
			min-height="100vh">
			<v-row align="center" class="height-screen">
				<v-col cols="12">
					<v-row class="text-center">
						<v-col cols="12">
							<HeaderLogoComponent height="100px"></HeaderLogoComponent>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<h2>{{ $t("home.companyPurpose.title") }}</h2>
						</v-col>
					</v-row>
					<v-row>
						<v-col v-for="(companyPurpose, index) in companyPurposes" :key="`purpose-${index}`" md="4" cols="12">
							<CompanyPurposeComponent v-bind="companyPurpose"></CompanyPurposeComponent>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-lazy>
		<v-lazy>
			<v-row class="py-5">
				<v-divider></v-divider>
			</v-row>
		</v-lazy>
		<v-lazy
			:options="{'threshold':0.3}"
			min-height="50vh">
			<v-row class="height-screen">
				<v-col>
					<h2>{{ $t("home.team.title") }}</h2>
				</v-col>
				<v-col cols="12">
					<v-row justify="center">
						<v-col v-for="(member, index) in teamMembers" :key="index" class="text-center" md="4" cols="12">
							<v-lazy
								:options="{'threshold':0.33}"
								min-height="50vh">
								<TeamMemberComponent v-bind="member"></TeamMemberComponent>
							</v-lazy>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-lazy>
	</v-container>
</template>
