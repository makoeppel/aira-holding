<template>
	<h3><u>{{ $t(title) }}</u></h3>
	<p>
		{{ $t(paragraph) }}
	</p>
</template>
<script setup lang="ts">

	export interface Props extends CompanyPurposeType {}

	const props = defineProps<Props>()
</script>
<script lang="ts">
	export type CompanyPurposeType = {
		title: string;
		paragraph: string;
	}

	export const CompanyPurposes:CompanyPurposeType[] = [
		{ title: "home.companyPurpose.whyWeExist.title", paragraph: "home.companyPurpose.whyWeExist.paragraph" },
		{ title: "home.companyPurpose.howWeDoIt.title", paragraph: "home.companyPurpose.howWeDoIt.paragraph" },
		{ title: "home.companyPurpose.whatWeDo.title", paragraph: "home.companyPurpose.whatWeDo.paragraph" }
	];
</script>