<script lang="ts" setup>
    // Blog — wireframe: posts (AI COOP principles, CharSage, …) + research links
    import PageHero from '@/components/common/PageHero.vue'
    import SectionHeader from '@/components/common/SectionHeader.vue'
    import ContactSection from '@/components/common/ContactSection.vue'
    import { posts } from '@/content/blog'
    import { publications, links } from '@/content/site'

    const published = posts.filter(p => p.status === 'published')
    const preparing = posts.filter(p => p.status === 'in-preparation')
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 aira-page"
    fluid
  >
    <PageHero
      tag="Blog"
      title="Notes on AI, data"
      highlight="and regenerative industry."
      subtitle="Articles, concepts and research from the AIRA team."
    >
      <v-btn
        variant="outlined"
        class="text-none"
        :href="links.linkedin"
        target="_blank"
        rel="noopener"
        prepend-icon="mdi-linkedin"
      >
        Follow us on LinkedIn
      </v-btn>
    </PageHero>

    <v-row class="aira-section pt-4">
      <v-col cols="12">
        <SectionHeader
          num="01"
          tag="Articles"
          title="Latest posts"
        />
        <v-row class="aira-g">
          <v-col
            v-for="(p, i) in published"
            :key="p.slug"
            cols="12"
            :md="i === 0 ? 12 : 6"
            class="d-flex"
          >
            <router-link
              :to="{ name: 'blogPost', params: { slug: p.slug } }"
              :class="['aira-card', i === 0 ? 'aira-card--accent' : '']"
            >
              <span class="aira-card-index">{{ p.date }} · {{ p.author }}</span>
              <h3 :class="[i === 0 ? 'text-h4' : 'text-h5', 'font-weight-bold', 'mb-3']">
                {{ p.title }}
              </h3>
              <p class="aira-lead mb-4">
                {{ p.excerpt }}
              </p>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="t in p.tags"
                  :key="t"
                  size="x-small"
                  variant="tonal"
                  color="#4f9cff"
                >
                  {{ t }}
                </v-chip>
              </div>
              <span class="aira-card-link">Read article →</span>
            </router-link>
          </v-col>
        </v-row>

        <h3 class="text-h6 font-weight-bold mt-10 mb-4">
          In preparation
        </h3>
        <v-row class="aira-g">
          <v-col
            v-for="p in preparing"
            :key="p.slug"
            cols="12"
            md="4"
            class="d-flex"
          >
            <div class="aira-card draft-card">
              <span class="aira-card-index">{{ p.date }}</span>
              <h4 class="text-subtitle-1 font-weight-bold mb-2">
                {{ p.title }}
              </h4>
              <p class="text-body-2 aira-muted mb-0">
                {{ p.excerpt }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="02"
          tag="Research & publications"
          title="Papers and posters"
        />
        <v-row class="aira-g">
          <v-col
            v-for="pub in publications"
            :key="pub.title"
            cols="12"
            md="4"
            class="d-flex"
          >
            <a
              :href="pub.href"
              target="_blank"
              rel="noopener"
              class="aira-card"
            >
              <span class="aira-card-index">{{ pub.type }} · {{ pub.venue }}</span>
              <h3 class="text-subtitle-1 font-weight-bold mb-0">
                {{ pub.title }}
              </h3>
              <span class="aira-card-link">Open ↗</span>
            </a>
          </v-col>
        </v-row>
        <v-btn
          variant="text"
          color="#4f9cff"
          class="text-none px-0 mt-4"
          :to="{ name: 'projects', query: { p: 'research' } }"
        >
          All talks and webinars →
        </v-btn>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <ContactSection
      title="Subscribe to our newsletter"
      subtitle="Leave your email address and we will let you know when new articles and projects are published."
    />
  </v-container>
</template>

<style scoped>
.draft-card { border-style: dashed; opacity: 0.85; }
</style>
