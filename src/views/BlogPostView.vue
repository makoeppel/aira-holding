<script lang="ts" setup>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import AiHubDiagram from '@/components/common/AiHubDiagram.vue'
    import ContactSection from '@/components/common/ContactSection.vue'
    import { posts } from '@/content/blog'

    const route = useRoute()
    const post = computed(() => posts.find(p => p.slug === route.params.slug && p.status === 'published'))
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 aira-page"
    fluid
  >
    <v-row
      v-if="post"
      justify="center"
      class="aira-section"
    >
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <v-btn
          variant="text"
          class="text-none px-0 mb-6"
          :to="{ name: 'blog' }"
          prepend-icon="mdi-arrow-left"
        >
          All posts
        </v-btn>
        <div class="aira-tag mb-3">
          {{ post.tags.join(' · ') }}
        </div>
        <h1 class="aira-page-title mb-4">
          {{ post.title }}
        </h1>
        <p class="aira-muted mb-8">
          {{ post.author }}, AIRA Holding GmbH · {{ post.date }}
          <template v-if="post.originalUrl">
            · first published in
            <a
              :href="post.originalUrl"
              target="_blank"
              rel="noopener"
              class="orig-link"
            >Biochar Today ↗</a>
          </template>
        </p>

        <article class="aira-prose">
          <template
            v-for="(b, i) in post.blocks"
            :key="i"
          >
            <h2 v-if="b.type === 'h2'">
              {{ b.text }}
            </h2>
            <p v-else-if="b.type === 'p'">
              {{ b.text }}
            </p>
            <ol v-else-if="b.type === 'ol'">
              <li
                v-for="it in b.items"
                :key="it"
              >
                {{ it }}
              </li>
            </ol>
            <ul v-else-if="b.type === 'ul'">
              <li
                v-for="it in b.items"
                :key="it"
              >
                {{ it }}
              </li>
            </ul>
            <figure
              v-else-if="b.type === 'figure'"
              class="aira-card my-8"
            >
              <AiHubDiagram v-if="b.name === 'ai-hub'" />
              <figcaption class="text-caption aira-muted mt-3">
                {{ b.caption }}
              </figcaption>
            </figure>
            <div
              v-else-if="b.type === 'note'"
              class="footnotes mt-10"
            >
              <hr class="aira-divider mb-4">
              <p
                v-for="it in b.items"
                :key="it"
                class="mb-2"
              >
                {{ it }}
              </p>
            </div>
          </template>
        </article>
      </v-col>
    </v-row>

    <v-row
      v-else
      class="aira-section"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
        class="text-center"
      >
        <h1 class="aira-page-title mb-4">
          Post not found
        </h1>
        <v-btn
          color="#4f9cff"
          variant="flat"
          class="text-none"
          :to="{ name: 'blog' }"
        >
          Back to the blog
        </v-btn>
      </v-col>
    </v-row>

    <hr class="aira-divider">
    <ContactSection
      title="Want to discuss this?"
      subtitle="Write to us, or subscribe to hear about new articles."
    />
  </v-container>
</template>

<style scoped>
.orig-link { color: #4f9cff; }
</style>
