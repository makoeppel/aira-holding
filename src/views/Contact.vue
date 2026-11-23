<script lang="ts" setup>
    import PageHero from '@/components/common/PageHero.vue'
    import ContactSection from '@/components/common/ContactSection.vue'
    import DemoLogin from '@/components/common/DemoLogin.vue'
    import { links } from '@/content/site'
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 aira-page"
    fluid
  >
    <PageHero
      tag="Contact"
      title="Let's talk about"
      highlight="your sensors."
      subtitle="Questions about a project, a feasibility study or AIRA One? Send us a message."
    >
      <v-btn
        variant="outlined"
        class="text-none"
        :href="links.linkedin"
        target="_blank"
        rel="noopener"
        prepend-icon="mdi-linkedin"
      >
        LinkedIn
      </v-btn>
      <v-btn
        variant="outlined"
        class="text-none"
        :href="links.demo"
        target="_blank"
        rel="noopener"
        append-icon="mdi-open-in-new"
      >
        AIRA One demo
      </v-btn>
      <DemoLogin class="align-self-center" />
    </PageHero>
    <ContactSection class="pt-0" />
  </v-container>
</template>
