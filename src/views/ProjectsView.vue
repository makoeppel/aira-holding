<script lang="ts" setup>
    // Projects — wireframe: Concepts (AI COOP) → Projects (EmissionTech, EffCheck,
    // CharSage, …) → Research & publications
    import { onMounted, nextTick } from 'vue'
    import { useRoute } from 'vue-router'
    import PageHero from '@/components/common/PageHero.vue'
    import SectionHeader from '@/components/common/SectionHeader.vue'
    import StatusChip from '@/components/common/StatusChip.vue'
    import AiHubDiagram from '@/components/common/AiHubDiagram.vue'
    import ContactSection from '@/components/common/ContactSection.vue'
    import { projects, upcoming, publications, talks } from '@/content/site'

    const route = useRoute()
    const concepts = projects.filter(p => p.kind === 'Concept')
    const projectList = projects.filter(p => p.kind === 'Project')

    onMounted(async () => {
        const p = route.query.p
        if (typeof p === 'string') {
            await nextTick()
            setTimeout(() => document.getElementById(`project-${p}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150)
        }
    })
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 aira-page"
    fluid
  >
    <PageHero
      tag="Projects"
      title="Research that ends up"
      highlight="in real facilities."
      subtitle="Our projects range from emission reduction in pyrolysis plants to new materials and cooperative data models. Successful projects become products, or companies of their own."
    />

    <!-- 01 PROJECTS -->
    <v-row class="aira-section pt-4">
      <v-col cols="12">
        <SectionHeader
          num="01"
          tag="Projects"
          title="Current and past projects"
        />
        <v-row class="aira-g">
          <v-col
            v-for="p in projectList"
            :id="`project-${p.id}`"
            :key="p.id"
            cols="12"
            md="6"
            class="d-flex"
          >
            <div :class="['aira-card', 'aira-card--hover', route.query.p === p.id ? 'aira-card--accent' : '']">
              <div class="d-flex align-center justify-space-between flex-wrap ga-2 mb-3">
                <span class="aira-card-index mb-0">{{ p.kind }}<template v-if="p.partners"> · {{ p.partners }}</template></span>
                <StatusChip :status="p.status" />
              </div>
              <h3 class="text-h5 font-weight-bold mb-2">
                {{ p.title }}
              </h3>
              <p class="text-body-1 mb-2">
                {{ p.short }}
              </p>
              <p class="text-body-2 aira-muted mb-4">
                {{ p.text }}
              </p>
              <div class="d-flex flex-wrap ga-2 mb-2">
                <v-chip
                  v-for="t in p.tags"
                  :key="t"
                  size="x-small"
                  variant="tonal"
                  color="primary"
                >
                  {{ t }}
                </v-chip>
              </div>
              <div
                v-if="p.link"
                class="mt-auto pt-3"
              >
                <v-btn
                  v-if="p.link.to"
                  variant="text"
                  color="primary"
                  class="text-none px-0"
                  :to="{ name: p.link.to }"
                >
                  {{ p.link.label }} →
                </v-btn>
                <v-btn
                  v-else
                  variant="text"
                  color="primary"
                  class="text-none px-0"
                  :href="p.link.href"
                  target="_blank"
                  rel="noopener"
                  append-icon="mdi-open-in-new"
                >
                  {{ p.link.label }}
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- 02 CONCEPTS -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="02"
          tag="Concepts"
          title="Ideas we are building towards"
        />
        <div
          v-for="c in concepts"
          :id="`project-${c.id}`"
          :key="c.id"
          class="aira-card"
        >
          <v-row align="center">
            <v-col
              cols="12"
              md="5"
            >
              <span class="aira-card-index">{{ c.kind }}</span>
              <h3 class="text-h5 font-weight-bold mb-2">
                {{ c.title }}
              </h3>
              <p class="text-body-1 mb-2">
                {{ c.short }}
              </p>
              <p class="text-body-2 aira-muted mb-4">
                {{ c.text }}
              </p>
              <v-btn
                variant="text"
                color="primary"
                class="text-none px-0"
                :to="{ name: 'blogPost', params: { slug: 'ai-optimized-biochar-industry' } }"
              >
                Read the background article →
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              md="7"
            >
              <AiHubDiagram />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <!-- UPCOMING -->
    <!-- <v-row class="aira-section--tight">
      <v-col cols="12">
        <h3 class="text-h5 font-weight-bold mb-5">
          Coming up
        </h3>
        <v-row class="aira-g">
          <v-col
            v-for="u in upcoming"
            :key="u.title"
            cols="12"
            sm="6"
            lg="3"
            class="d-flex"
          >
            <div class="aira-card upcoming-card">
              <StatusChip
                status="planned"
                class="mb-3"
              />
              <h4 class="text-subtitle-1 font-weight-bold mb-1">
                {{ u.title }}
              </h4>
              <p class="text-body-2 aira-muted mb-0">
                {{ u.text }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->

    <hr class="aira-divider mt-12">

    <!-- 03 RESEARCH -->
    <v-row
      id="project-research"
      class="aira-section"
    >
      <v-col cols="12">
        <SectionHeader
          num="03"
          tag="Research & publications"
          title="Peer-reviewed work and talks"
        />
        <v-row class="aira-g mb-8">
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

        <div class="aira-table-wrap">
          <table class="aira-table">
            <thead>
              <tr>
                <th>Talk / webinar</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="t in talks"
                :key="t.title"
              >
                <td>
                  <a
                    v-if="t.href"
                    :href="t.href"
                    target="_blank"
                    rel="noopener"
                    class="talk-link"
                  >{{ t.title }} ↗</a>
                  <strong v-else>{{ t.title }}</strong>
                </td>
                <td class="aira-muted">
                  {{ t.venue }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <ContactSection
      title="Have a project in mind?"
      subtitle="We are looking for manufacturers and operators of fermentation, pyrolysis, plastics and other biorefinery technologies."
    />
  </v-container>
</template>

<style scoped>
.upcoming-card { border-style: dashed; }
.talk-link { color: inherit; font-weight: 700; text-decoration: underline; text-decoration-color: var(--nb-coral); text-decoration-thickness: 2px; }
.talk-link:hover { text-decoration: underline; }
</style>
