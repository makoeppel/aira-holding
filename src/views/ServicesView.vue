<script lang="ts" setup>
    // Services — wireframe: Service 1 Feasibility Studies, Service 2 Consultation,
    // Service 3 Software development (+ SaaS product layers)
    import { onMounted, nextTick } from 'vue'
    import { useRoute } from 'vue-router'
    import PageHero from '@/components/common/PageHero.vue'
    import SectionHeader from '@/components/common/SectionHeader.vue'
    import StatusChip from '@/components/common/StatusChip.vue'
    import ServiceLadder from '@/components/common/ServiceLadder.vue'
    import ContactSection from '@/components/common/ContactSection.vue'
    import { services, productLayers, links } from '@/content/site'

    const route = useRoute()

    // Hash routing: deep links use ?s=<service-id> and scroll after render
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    onMounted(async () => {
        const s = route.query.s
        if (typeof s === 'string') {
            await nextTick()
            setTimeout(() => scrollTo(`service-${s}`), 150)
        }
    })
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 aira-page"
    fluid
  >
    <PageHero
      tag="Services"
      title="From the first question"
      highlight="to software in production."
      subtitle="Domain-specific, explainable, ML-based process optimization, from R&D to operations, including data strategy, modelling and implementation. Each service can be booked on its own or as the next step after the previous one."
    >
      <v-btn
        v-for="s in services"
        :key="s.id"
        variant="outlined"
        class="text-none"
        @click="scrollTo(`service-${s.id}`)"
      >
        {{ s.num }} · {{ s.title }}
      </v-btn>
    </PageHero>

    <!-- SERVICE DETAILS -->
    <v-row
      v-for="(s, i) in services"
      :id="`service-${s.id}`"
      :key="s.id"
      class="aira-section service-row"
      align="start"
    >
      <v-col
        cols="12"
        md="5"
        :order-md="i % 2 === 0 ? 1 : 2"
      >
        <span class="aira-num">{{ s.num }}</span>
        <div class="aira-tag mb-2">
          Service
        </div>
        <h2 class="text-h4 font-weight-bold mb-3">
          {{ s.title }}
        </h2>
        <p class="aira-lead">
          {{ s.text }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="7"
        :order-md="i % 2 === 0 ? 2 : 1"
      >
        <div class="aira-card">
          <div class="aira-icon-box mb-4">
            <v-icon
              :icon="s.icon"
              color="#4f9cff"
            />
          </div>
          <span class="aira-card-index">What you get</span>
          <ul class="aira-check-list mb-5">
            <li
              v-for="pt in s.points"
              :key="pt"
            >
              {{ pt }}
            </li>
          </ul>
          <span class="aira-card-index">References</span>
          <p class="text-body-2 aira-muted mb-0">
            {{ s.references }}
          </p>
          <div
            v-if="s.id === 'software'"
            class="d-flex flex-wrap ga-3 mt-5"
          >
            <v-btn
              color="#4f9cff"
              variant="flat"
              class="text-none"
              :to="{ name: 'sensorCloud' }"
            >
              Discover Sensor Cloud
            </v-btn>
            <v-btn
              variant="outlined"
              class="text-none"
              :href="links.demo"
              target="_blank"
              rel="noopener"
              append-icon="mdi-open-in-new"
            >
              Live demo
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- HOW THE SERVICES CONNECT -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="04"
          tag="How it fits together"
          title="Our service offering, step by step"
          subtitle="Start wherever you are. Many clients begin with a feasibility study, then move on to dashboards, forecasts and finally optimization."
        />
        <ServiceLadder />
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- SAAS LAYERS -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="05"
          tag="SaaS products"
          title="Sensor Cloud, layer by layer"
          subtitle="Our software grows with you, from onboarding and monitoring to assistance and, eventually, closed-loop control. Every layer builds on the one before."
        />
        <v-row class="aira-g">
          <v-col
            v-for="l in productLayers"
            :key="l.name"
            cols="12"
            sm="6"
            lg="3"
            class="d-flex"
          >
            <div :class="['aira-card', 'aira-card--hover', l.status === 'planned' ? 'layer-planned' : '']">
              <div class="d-flex align-center justify-space-between mb-4">
                <div class="aira-icon-box">
                  <v-icon
                    :icon="l.icon"
                    color="#4f9cff"
                  />
                </div>
                <StatusChip :status="l.status" />
              </div>
              <span class="aira-card-index">{{ l.layer }}</span>
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ l.name }}
              </h3>
              <p class="text-body-2 aira-muted mb-3">
                {{ l.text }}
              </p>
              <p class="text-caption aira-muted mt-auto mb-0">
                For: {{ l.audience }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <ContactSection
      title="Which service fits your plant?"
      subtitle="Describe your facility and your question; we will propose a first step, usually a short feasibility study."
    />
  </v-container>
</template>

<style scoped>
.service-row { scroll-margin-top: 80px; }
.layer-planned { border-style: dashed; }
</style>
