<template>
    <v-container fluid class="px-0 py-1">
        <v-row justify="center" class="text-center">
            <v-col cols="12" class="pb-2">
                <v-avatar size="110" class="mx-auto profile-avatar-glow">
                    <v-img
                        :src="imgSrc"
                        :alt="`Profile picture of ${name}`"
                        cover></v-img>
                </v-avatar>
            </v-col>
            
            <v-col cols="12" class="py-0">
                <h3 class="text-h6 font-weight-bold text-white mb-0 leading-tight">{{ name }}</h3>
                <div v-if="title" class="text-caption text-primary font-weight-medium mt-1 opacity-90">
                    {{ title }}
                </div>
            </v-col>
            
            <v-col cols="12" class="pt-2 pb-0 d-flex justify-center gap-1">
                <v-btn
                    v-for="(social, socialIndex) in socials" 
                    :key="`${name}-${socialIndex}`"
                    variant="plain"
                    density="compact"
                    color="primary"
                    :icon="social.icon"
                    :href="social.href"
                    target="_blank"
                    :aria-label="`Link to ${social.plattformName} profile of ${name}`"
                    class="social-icon-btn"></v-btn>
            </v-col>
        </v-row>
        
        <v-row class="mt-3">
            <v-col cols="12" class="py-0">
                <!-- Removed line-clamp classes to let the full biography render naturally -->
                <p class="text-body-2 text-left opacity-70 mb-0 px-2 full-bio-text">
                    {{ $t(paragraph) }}
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import { VAvatar, VImg, VBtn } from "vuetify/lib/components/index.mjs";

    export interface Props extends TeamMemberType {}

    defineProps<Props>();
</script>

<script lang="ts">
    export type SocialMedia = {
        plattformName: string;
        icon: string;
        href: string;
    }

    export type TeamMemberType = {
        name: string;
        title?: string;
        imgSrc: string;
        socials?: SocialMedia[];
        paragraph: string;
    }

    export const TeamMembers: TeamMemberType[] = [
        {
            name: "Dr. Marius Snella Köppel",
            title: "Postdoc at ETH Zürich",
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
    ];
</script>

<style scoped>
.gap-1 {
  gap: 4px;
}
.leading-tight {
  line-height: 1.25 !important;
}
.profile-avatar-glow {
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.social-icon-btn {
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.social-icon-btn:hover {
  opacity: 1;
  transform: scale(1.05);
}
.full-bio-text {
  line-height: 1.5;
  word-break: break-word;
}
</style>