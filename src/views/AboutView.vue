<script lang="ts" setup>
    // About us — wireframe: How we began (chronology) → Our mission →
    // Network & experts → Meet our core team → Contact
    import PageHero from '@/components/common/PageHero.vue'
    import SectionHeader from '@/components/common/SectionHeader.vue'
    import ContactSection from '@/components/common/ContactSection.vue'
    import AiHubDiagram from '@/components/common/AiHubDiagram.vue'
    import { TeamMembers } from '@/components/home/TeamMember.vue'
    import {
        timeline, nameStory, principles, differentiators,
        partners, networks, teamRoles, advisors
    } from '@/content/site'

    const initials = (name: string) => name.split(' ').map(s => s[0]).join('').slice(0, 2)
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 aira-page"
    fluid
  >
    <PageHero
      tag="About us"
      title="Researchers who want their work"
      highlight="to run in real plants."
      subtitle="AIRA brings together computer science, physics, economics and communication. We research applications of AI and turn the most promising results into products and spin-offs."
    >
      <v-btn
        color="primary"
        variant="flat"
        size="large"
        class="text-none"
        :to="{ name: 'contact' }"
      >
        Get in touch
      </v-btn>
      <v-btn
        variant="outlined"
        size="large"
        class="text-none"
        :to="{ name: 'projects' }"
      >
        See our projects
      </v-btn>
    </PageHero>

    <!-- 01 HOW WE BEGAN -->
    <v-row class="aira-section pt-6">
      <v-col cols="12">
        <SectionHeader
          num="01"
          tag="How we began"
          title="Our story"
        />
        <div class="timeline">
          <div
            v-for="t in timeline"
            :key="t.year"
            class="timeline-item"
          >
            <div class="timeline-year">
              {{ t.year }}
            </div>
            <div class="timeline-dot" />
            <div class="timeline-body">
              <h3 class="text-h6 font-weight-bold mb-1">
                {{ t.title }}
              </h3>
              <p class="text-body-2 aira-muted mb-0">
                {{ t.text }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- WHY AIRA -->
    <v-row class="aira-section--tight">
      <v-col cols="12">
        <div class="aira-card nb-fill nb-sand">
          <span class="aira-card-index">Why “AIRA”?</span>
          <h3 class="text-h5 font-weight-bold mb-5">
            Artificial Intelligence, Research and Analytics, and a bit more
          </h3>
          <v-row class="aira-g">
            <v-col
              v-for="n in nameStory"
              :key="n.letter"
              cols="12"
              sm="6"
              md="3"
            >
              <div class="name-letter mb-1">
                {{ n.letter }}
              </div>
              <p class="text-body-2 aira-muted mb-0">
                {{ n.text }}
              </p>
            </v-col>
          </v-row>
          <p class="text-body-2 aira-muted mt-5 mb-0">
            The acronym came after the name. It states our intent: to do research, and to start with analytics,
            meaning how data are generated, rather than only analysing data that already exist.
          </p>
        </div>
      </v-col>
    </v-row>

    <hr class="aira-divider mt-12">

    <!-- 02 MISSION -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="02"
          tag="Our mission"
          title="Fair, ecological and regenerative AI"
          subtitle="The problem we start from: AI is often over-engineered, and data are rarely used in a circular way. Our vision is to research applications of AI and spin off promising results as products, guided by three values."
        />
        <v-row class="aira-g nb-rotate mb-8">
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

        <div class="aira-card">
          <v-row align="center">
            <v-col
              cols="12"
              md="5"
            >
              <span class="aira-card-index">Concept // AI COOP</span>
              <h3 class="text-h5 font-weight-bold mb-3">
                Scaling AI horizontally through cooperation
              </h3>
              <p class="text-body-2 aira-muted">
                We have developed a framework to optimize a technology horizontally in an AI Hub. Operators pool their data
                in a cooperative data trustee that they own and govern. AIRA evaluates the data centrally and gives every
                member the best available optimization at the lowest cost.
              </p>
              <p class="text-body-2 aira-muted mb-0">
                Our value proposition: a circular data economy, with the best optimization at the best price.
              </p>
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

    <!-- WHAT MAKES US DIFFERENT -->
    <v-row class="aira-section--tight">
      <v-col cols="12">
        <h3 class="text-h5 font-weight-bold mb-5">
          What makes us different
        </h3>
        <v-row class="aira-g nb-rotate">
          <v-col
            v-for="d in differentiators"
            :key="d.title"
            cols="12"
            sm="6"
            md
            class="d-flex"
          >
            <div class="aira-card">
              <h4 class="text-subtitle-1 font-weight-bold mb-1">
                {{ d.title }}
              </h4>
              <p class="text-body-2 aira-muted mb-0">
                {{ d.text }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <hr class="aira-divider mt-12">

    <!-- 03 NETWORK -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="03"
          tag="Network & experts"
          title="Partners we work with"
          subtitle="Industry, research institutes and public bodies, and we are always looking for manufacturers and operators of fermentation, pyrolysis, plastics and other biorefinery technologies."
        />
        <v-row class="aira-g mb-6">
          <v-col
            v-for="p in partners"
            :key="p.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex"
          >
            <a
              :href="p.url"
              target="_blank"
              rel="noopener"
              class="aira-card partner-card"
            >
              <span class="text-body-2 font-weight-bold">{{ p.name }}</span>
              <v-icon
                icon="mdi-open-in-new"
                size="x-small"
                class="partner-icon"
              />
            </a>
          </v-col>
        </v-row>
        <h4 class="text-subtitle-1 font-weight-bold mb-3">
          Networks & associations
        </h4>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="n in networks"
            :key="n.name"
            :href="n.url"
            target="_blank"
            rel="noopener"
            variant="outlined"
          >
            {{ n.name }} · {{ n.role }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <!-- 04 TEAM -->
    <v-row class="aira-section">
      <v-col cols="12">
        <SectionHeader
          num="04"
          tag="Meet our core team"
          title="The people behind AIRA"
        />
        <v-row class="aira-g">
          <v-col
            v-for="m in TeamMembers"
            :key="m.name"
            cols="12"
            md="4"
            class="d-flex"
          >
            <div class="aira-card team-card">
              <div class="d-flex align-center ga-4 mb-4">
                <v-avatar size="84">
                  <v-img
                    :src="m.imgSrc"
                    :alt="`Portrait of ${m.name}`"
                    cover
                  />
                </v-avatar>
                <div>
                  <h3 class="text-h6 font-weight-bold mb-0">
                    {{ m.name }}
                  </h3>
                  <div class="text-caption team-role">
                    {{ teamRoles[m.name] || m.title }}
                  </div>
                  <div class="mt-1">
                    <v-btn
                      v-for="s in m.socials"
                      :key="s.href"
                      :icon="s.icon"
                      :href="s.href"
                      target="_blank"
                      rel="noopener"
                      variant="plain"
                      density="compact"
                      size="small"
                      :aria-label="`${s.plattformName} profile of ${m.name}`"
                    />
                  </div>
                </div>
              </div>
              <p class="text-body-2 aira-muted mb-0">
                {{ $t(m.paragraph) }}
              </p>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex flex-wrap ga-4 mt-6">
          <div
            v-for="a in advisors"
            :key="a.name"
            class="aira-card advisor-card"
          >
            <v-avatar
              size="48"
              color="primary"
              class="text-white font-weight-bold"
            >
              {{ initials(a.name) }}
            </v-avatar>
            <div>
              <div class="font-weight-bold">
                {{ a.name }}
              </div>
              <div class="text-caption team-role">
                {{ a.role }}
              </div>
                <div class="mt-1">
                  <v-btn
                    v-for="s in a.socials"
                    :key="s.href"
                    :icon="s.icon"
                    :href="s.href"
                    target="_blank"
                    rel="noopener"
                    variant="plain"
                    density="compact"
                    size="small"
                    :aria-label="`${s.plattformName} profile of ${a.name}`"
                  />
                </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <hr class="aira-divider">

    <ContactSection />
  </v-container>
</template>

<style scoped>
.timeline { position: relative; margin-left: 4px; }
.timeline::before {
  content: '';
  position: absolute;
  left: 129px;
  top: 8px;
  bottom: 8px;
  border-left: 3px solid var(--nb-ink);
}
.timeline-item {
  display: grid;
  grid-template-columns: 110px 40px 1fr;
  align-items: start;
  padding: 12px 0;
}
.timeline-year {
  font-family: var(--font-display);
  font-size: 18px;
  text-align: right;
  padding-top: 0;
}
.timeline-dot {
  width: 20px; height: 20px;
  background: var(--nb-coral);
  border: 3px solid var(--nb-ink);
  box-shadow: 3px 3px 0 var(--nb-ink);
  margin: 2px auto 0;
  position: relative; z-index: 1;
  transform: rotate(45deg);
}
.timeline-item:nth-child(3n+2) .timeline-dot { background: var(--nb-sand); }
.timeline-item:nth-child(3n) .timeline-dot { background: var(--nb-slate); }
.timeline-body {
  max-width: 760px;
  background: var(--nb-card);
  border: 3px solid var(--nb-ink);
  box-shadow: 5px 5px 0 var(--nb-ink);
  padding: 16px 20px;
}

@media (max-width: 599px) {
  .timeline::before { left: 9px; }
  .timeline-item { grid-template-columns: 22px 1fr; column-gap: 14px; }
  .timeline-year { grid-column: 2; text-align: left; margin-bottom: 6px; }
  .timeline-dot { grid-column: 1; grid-row: 1; margin: 2px 0 0; }
  .timeline-body { grid-column: 2; }
}

.name-letter {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 20px;
  letter-spacing: 1px;
  background: #1A1A1A;
  color: #F2EADB;
  padding: 2px 10px;
}

.partner-card { flex-direction: row; align-items: center; justify-content: space-between; gap: 8px; padding: 18px 20px; }
.partner-icon { opacity: 0.6; }

.team-role {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px !important;
  text-transform: uppercase;
  background: var(--nb-sand);
  color: #1A1A1A;
  border: 2px solid var(--nb-ink);
  padding: 1px 6px;
  margin-top: 4px;
}

.team-card .v-avatar { flex-shrink: 0; }

.advisor-card { flex-direction: row; align-items: center; gap: 14px; height: auto; padding: 16px 20px; }
</style>
