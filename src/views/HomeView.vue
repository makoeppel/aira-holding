<script lang="ts" setup>
    // Home page — section order follows the Canva wireframe:
    // Hero → What we do → Our services → AIRA One → Projects →
    // How we work → Partners & networks → Contact
    import { defineAsyncComponent } from 'vue'
    import SectionHeader from '@/components/common/SectionHeader.vue'
    import StatusChip from '@/components/common/StatusChip.vue'
    import ServiceLadder from '@/components/common/ServiceLadder.vue'
    import ContactSection from '@/components/common/ContactSection.vue'
    import DemoLogin from '@/components/common/DemoLogin.vue'
    import { principles, problems, services, projects, networks, links } from '@/content/site'

    const HeaderLogoComponent = defineAsyncComponent(() => import('@/components/home/HeaderLogo.vue'))
    const LogoSliderComponent = defineAsyncComponent(() => import('@/components/home/LogoSlider.vue'))
    const EmissionTechAnimation = defineAsyncComponent(() => import('@/components/home/EmissionTechAnimation.vue'))

    const featured = projects.filter(p => ['effcheck', 'charsage', 'ai-coop'].includes(p.id))
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 aira-page"
    fluid
  >
    <!-- HERO -->
    <v-row
      align="center"
      justify="center"
      class="hero-row"
    >
      <v-col cols="12">
        <v-row
          class="text-center"
          justify="center"
        >
          <v-col
            cols="12"
            md="10"
            lg="8"
          >
            <HeaderLogoComponent
              height="180px"
              class="mb-4 justify-center"
            />
            <div
              class="d-flex justify-center ga-3 mb-6"
              aria-hidden="true"
            >
              <span class="nb-triangle" />
              <span class="nb-triangle nb-triangle--sand" />
              <span class="nb-triangle nb-triangle--slate" />
            </div>
            <h1 class="aira-hero-title mb-4">
              AI for complex <span class="aira-gradient-text">industrial decisions.</span>
            </h1>
            <p class="aira-lead mx-auto aira-measure mb-8">
              AIRA Holding develops AI systems that turn relevant data into decision intelligence for regenerative industry,
              from the first feasibility study to software running in production.
            </p>
            <div class="d-flex flex-wrap justify-center ga-3 mb-10">
              <v-btn
                color="primary"
                size="large"
                variant="flat"
                class="text-none"
                :to="{ name: 'services' }"
              >
                Our services
              </v-btn>
              <v-btn
                size="large"
                variant="outlined"
                class="text-none"
                :to="{ name: 'airaOne' }"
                prepend-icon="mdi-cloud-outline"
              >
                AIRA One
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row
          justify="center"
          class="aira-g nb-rotate"
        >
          <v-col
            v-for="(p, i) in principles"
            :key="p.title"
            cols="12"
            md="4"
            class="d-flex"
          >
            <div class="aira-card aira-card--hover">
              <div class="aira-icon-box mb-4">
                <v-icon
                  :icon="p.icon"
                  color="primary"
                />
              </div>
              <span class="aira-card-index">0{{ i + 1 }} // {{ p.title }}</span>
              <h3 class="text-h6 font-weight-bold mb-1">
                {{ p.tagline }}
              </h3>
              <p class="text-body-2 aira-muted mb-0">
                {{ p.text }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- 01 WHAT WE DO -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="01"
          tag="What we do"
          title="Replacing trial and error with data-driven decisions"
          subtitle="Operators of technical facilities often decide by trying things out, which is costly in time, money and resources. We use the data their plants already produce, and only as much AI as the problem needs."
        />
        <v-row class="aira-g">
          <v-col
            v-for="(pr, i) in problems"
            :key="pr.key"
            cols="12"
            md="4"
            class="d-flex"
          >
            <div class="aira-card">
              <span class="aira-card-index">{{ i + 1 }} · {{ pr.key }}</span>
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ pr.title }}
              </h3>
              <p class="text-body-2 aira-muted mb-0">
                {{ pr.text }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- 02 SERVICES -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="02"
          tag="Our services"
          title="Three ways we work with you"
          subtitle="From the first question to software in production: domain-specific, explainable ML-based process optimization, including data strategy, modelling and implementation."
        />
        <v-row class="aira-g nb-rotate">
          <v-col
            v-for="s in services"
            :key="s.id"
            cols="12"
            md="4"
            class="d-flex"
          >
            <router-link
              :to="{ name: 'services', query: { s: s.id } }"
              class="aira-card"
            >
              <div class="aira-icon-box mb-5">
                <v-icon
                  :icon="s.icon"
                  color="primary"
                />
              </div>
              <span class="aira-card-index">{{ s.num }} // Service</span>
              <h3 class="text-h5 font-weight-bold mb-2">
                {{ s.title }}
              </h3>
              <p class="text-body-2 aira-muted mb-0">
                {{ s.short }}
              </p>
              <span class="aira-card-link">Learn more →</span>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- AIRA ONE BAND -->
    <v-row class="aira-section--tight">
      <v-col cols="12">
        <div class="aira-card aira-card--accent sc-band">
          <div class="flex-grow-1">
            <span class="aira-card-index">Product // AIRA One</span>
            <h3 class="text-h5 font-weight-bold mb-2">
              Monitor, forecast and explain your plant in one platform
            </h3>
            <p class="text-body-2 aira-muted mb-0">
              AIRA One connects technical facilities, shows live dashboards and emission forecasts with uncertainty,
              and lets your team explore setpoints in a what-if simulator before anything changes on the machine.
            </p>
            <DemoLogin class="mt-4" />
          </div>
          <div class="d-flex flex-wrap ga-3 flex-shrink-0">
            <v-btn
              color="primary"
              variant="flat"
              class="text-none"
              :to="{ name: 'airaOne' }"
            >
              Discover AIRA One
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

    <!-- 03 PROJECTS -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="03"
          tag="Projects"
          title="Research that becomes product"
        />

        <div class="aira-card mb-6">
          <v-row align="center">
            <v-col
              cols="12"
              lg="4"
            >
              <span class="aira-card-index">Flagship project</span>
              <h3 class="text-h5 font-weight-bold mb-2">
                EmissionTech
              </h3>
              <StatusChip
                status="active"
                class="mb-3"
              />
              <p class="text-body-2 aira-muted">
                Together with PYREG GmbH and ARTi we reduce NOx emissions in biochar plants and optimize biochar properties with machine learning.
                The work was presented at NeurIPS 2024 and is now available as AIRA One.
              </p>
              <div class="d-flex flex-wrap ga-2">
                <v-btn
                  size="small"
                  variant="tonal"
                  color="primary"
                  class="text-none"
                  :href="links.paper"
                  target="_blank"
                  rel="noopener"
                  append-icon="mdi-open-in-new"
                >
                  Paper
                </v-btn>
                <v-btn
                  size="small"
                  variant="text"
                  class="text-none"
                  :to="{ name: 'projects' }"
                >
                  All projects →
                </v-btn>
              </div>
            </v-col>
            <v-col
              cols="12"
              lg="8"
              class="text-center"
            >
              <EmissionTechAnimation />
            </v-col>
          </v-row>
        </div>

        <v-row class="aira-g">
          <v-col
            v-for="p in featured"
            :key="p.id"
            cols="12"
            md="4"
            class="d-flex"
          >
            <router-link
              :to="{ name: 'projects', query: { p: p.id } }"
              class="aira-card"
            >
              <span class="aira-card-index">{{ p.kind }}</span>
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ p.title }}
              </h3>
              <StatusChip
                :status="p.status"
                class="mb-3"
              />
              <p class="text-body-2 aira-muted mb-0">
                {{ p.short }}
              </p>
              <span class="aira-card-link">Read more →</span>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- 04 HOW WE WORK -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="04"
          tag="How we work"
          title="Step by step, from data to decisions"
          subtitle="We start small, prove value with your own data, and only then automate. Each step builds on the previous one and can be booked on its own."
        />
        <ServiceLadder />
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- 05 PARTNERS & NETWORKS -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="05"
          tag="Partners & networks"
          title="Working with industry, research and public partners"
        />
        <LogoSliderComponent />
        <div class="d-flex flex-wrap ga-2 mt-8">
          <v-chip
            v-for="n in networks"
            :key="n.name"
            :href="n.url"
            target="_blank"
            rel="noopener"
            variant="outlined"
            size="small"
          >
            {{ n.name }} · {{ n.role }}
          </v-chip>
          <v-chip
            :to="{ name: 'about' }"
            variant="text"
            size="small"
            color="primary"
          >
            All partners →
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- CONTACT -->
    <ContactSection />
  </v-container>
</template>

<style scoped>
.nb-triangle { border-left-width: 22px; border-right-width: 22px; border-bottom-width: 38px; }
.nb-triangle--sand { border-bottom-color: var(--nb-sand); }
.nb-triangle--slate { border-bottom-color: var(--nb-slate); }
.hero-row { min-height: calc(100vh - var(--v-layout-top)); padding: 48px 0; }

.sc-band {
  flex-direction: row;
  align-items: center;
  gap: 24px;
}

@media (max-width: 959px) {
  .sc-band { flex-direction: column; align-items: flex-start; }
}
</style>
