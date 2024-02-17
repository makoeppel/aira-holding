<template>
    <v-container fluid class="px-0">
        <v-row justify="center">
            <!--<v-col cols="12">
                <v-avatar size="x-large">
                    <v-img
                        :src="imgSrc"
                        :alt="`Project picture of ${title}`"></v-img>
                </v-avatar>
            </v-col>
            -->
            <v-col cols="12" class="py-0"><h3><u>{{ title }}</u></h3></v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="text-left">{{ $t(paragraph) }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">

	export interface Props extends ProjectType {}

	const props = defineProps<Props>()

</script>
<script lang="ts">

	export type ProjectType = {
        imgSrc: string;
		title: string;
		paragraph: string;
	}

	export const Projects:ProjectType[] = [
		{ imgSrc: "home.projects.project0.imgSrc", title: "EmissionTech", paragraph: "home.projects.project0.paragraph" },
		{ imgSrc: "home.projects.project1.imgSrc", title: "CharBase", paragraph: "home.projects.project1.paragraph" },
		{ imgSrc: "home.projects.project2.imgSrc", title: "BioCharGe", paragraph: "home.projects.project2.paragraph" }
	];
</script>