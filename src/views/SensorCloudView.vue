<script lang="ts" setup>
    import { motion } from 'motion-v'

    // ---------------------------------------------------------------
    // Sensor Cloud product page
    // Structure follows a classic product landing page:
    // hero -> highlight -> capabilities -> workflow -> values ->
    // deployment -> platform stack -> call to action
    // ---------------------------------------------------------------

    const paperUrl = 'https://arxiv.org/abs/2412.07881'
    const demoUrl = 'https://dev.aira-holding.de'

    // Hash routing is used, so in-page anchors must scroll programmatically
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const capabilities = [
        {
            title: 'Machine Connectivity',
            text: 'Edge devices bring plants online. Sensor and setpoint data are streamed via IXON or custom connectors into one time-series store, together with a machine, source and metric label.',
            icon: 'mdi-access-point-network'
        },
        {
            title: 'Live Dashboards',
            text: 'Sensor overviews, trend charts and driver heatmaps for every machine. Each customer sees only their own plants, enforced by row-level security.',
            icon: 'mdi-monitor-dashboard'
        },
        {
            title: 'Forecasts with Uncertainty',
            text: 'Lightweight gradient-boosting models forecast emissions and key sensors over several horizons, with P10/P90 bands and a continuous forecast-vs-actual check.',
            icon: 'mdi-chart-bell-curve-cumulative'
        },
        {
            title: 'What-if Simulation',
            text: 'Move setpoint sliders and see model-estimated sensor and emission values with uncertainty. Feature importances show which setpoints drive which signals.',
            icon: 'mdi-tune-variant'
        },
        {
            title: 'Proposal & Review',
            text: 'Operators save setpoint proposals, reviewers approve or reject them. Every step is kept in an append-only audit log. Nothing is ever written to the machine automatically.',
            icon: 'mdi-clipboard-check-outline'
        },
        {
            title: 'Reproducible Pipelines',
            text: 'Versioned data and model pipelines, scheduled retraining and orchestration. Every number in a dashboard can be traced back to its raw data.',
            icon: 'mdi-source-branch'
        }
    ]

    const workflow = [
        { label: 'Connect', desc: 'Edge device on the plant', phase: 'blue' },
        { label: 'Ingest', desc: 'Time-series store, cleaned & labelled', phase: 'blue' },
        { label: 'Visualize', desc: 'Live dashboards per machine', phase: 'purple' },
        { label: 'Forecast', desc: 'Emission forecasts with P10/P90 band', phase: 'purple' },
        { label: 'Simulate', desc: 'What-if setpoint exploration', phase: 'purple' },
        { label: 'Propose', desc: 'Reviewed setpoint proposals', phase: 'green' },
        { label: 'Adapt', desc: 'Operator acts; new data closes the loop', phase: 'green' }
    ]

    const phases = [
        { key: 'blue', name: 'Transparency', text: 'Data in one structured format' },
        { key: 'purple', name: 'Inspect', text: 'Patterns made visible' },
        { key: 'green', name: 'Adapt', text: 'Better decisions, new data' }
    ]

    const values = [
        {
            title: 'FAIR',
            tagline: 'Your data stays yours.',
            text: 'Only machine and process data, no human data. Per-customer access control, an audit trail, and the option to run the whole platform on your own infrastructure.'
        },
        {
            title: 'ECOLOGICAL',
            tagline: 'CPU-sized AI.',
            text: 'Classical, explainable machine learning that trains on moderate data volumes and runs on standard CPUs. No GPU clusters required.'
        },
        {
            title: 'REGENERATIVE',
            tagline: 'Fewer emissions, better products.',
            text: 'Built for biochar, pyrolysis and biorefinery processes: lower NOx and CO, steadier operation and product properties tuned to their application.'
        }
    ]

    const deployments = [
        {
            tag: 'MANAGED',
            title: 'Sensor Cloud',
            text: 'Hosted and operated by AIRA. Connect your edge device and get dashboards, forecasts and the what-if portal without running any infrastructure yourself.',
            points: ['Fast onboarding', 'Updates and model retraining included', 'Customer portal with roles']
        },
        {
            tag: 'SELF-HOSTED',
            title: 'Sensor Platform On-Premise',
            text: 'The same platform as a Kubernetes/Helm deployment in your own data centre or private cloud, for full data sovereignty.',
            points: ['Runs in your network', 'Single Helm chart', 'Support and model updates by AIRA']
        }
    ]

    const stack = [
        { layer: 'Edge connectivity', tech: 'IXON, custom connectors', role: 'Remote access and data import from PLCs and sensors' },
        { layer: 'Time-series storage', tech: 'TimescaleDB (PostgreSQL)', role: 'Measurements, forecasts and setpoints in one hypertable' },
        { layer: 'Data & ML pipelines', tech: 'Kedro', role: 'Cleaning, feature engineering, training and prediction' },
        { layer: 'Orchestration', tech: 'Apache Airflow', role: 'Scheduled imports, retraining and forecast runs' },
        { layer: 'Models', tech: 'LightGBM, classical ML', role: 'Multi-horizon forecasts and steady-state what-if models' },
        { layer: 'Dashboards', tech: 'Apache Superset', role: 'Sensor overview, driver heatmaps, forecast vs. actual' },
        { layer: 'Customer portal', tech: 'AIRA Portal', role: 'Embedded dashboards, what-if, proposals, roles and audit log' },
        { layer: 'Deployment', tech: 'Docker, Kubernetes, Helm', role: 'Managed cloud or self-hosted on-premise' }
    ]

    // -------- hero chart (actual signal + forecast band) --------
    const actualPath = 'M20 150 C 50 140, 70 110, 100 118 S 150 160, 180 135 S 230 80, 260 95 S 310 140, 340 120'
    const forecastPath = 'M340 120 C 370 108, 390 92, 420 96 S 470 118, 500 104'
    const bandPath = 'M340 120 C 370 92, 390 70, 420 72 S 470 88, 500 70 L 500 138 C 470 150, 450 130, 420 122 S 370 136, 340 120 Z'

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.6, type: 'spring', duration: 1.6, bounce: 0 },
                opacity: { delay: i * 0.6, duration: 0.01 }
            }
        })
    }

    const fade = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({ opacity: 1, transition: { delay: i * 0.6, duration: 0.8 } })
    }
</script>

<template>
  <v-container
    class="py-0 px-4 px-md-8 sensor-cloud"
    fluid
  >
    <!-- HERO -->
    <v-row
      align="center"
      justify="center"
      class="hero-row py-12"
    >
      <v-col
        cols="12"
        md="6"
        class="pr-md-8"
      >
        <div class="section-tag mb-3">
          AIRA Sensor Cloud
        </div>
        <h1 class="hero-title font-weight-black mb-5">
          From sensor data to
          <span class="accent-text">better plant decisions.</span>
        </h1>
        <p class="text-body-1 text-md-h6 text-medium-emphasis mb-8">
          An end-to-end platform that connects technical facilities, turns their process data into live dashboards and emission forecasts,
          and lets your team explore setpoints safely before changing anything on the machine.
          Available as a managed cloud service or self-hosted.
        </p>
        <div class="d-flex flex-wrap ga-3">
          <v-btn
            color="#4f9cff"
            size="large"
            class="text-none"
            variant="flat"
            :href="demoUrl"
            target="_blank"
            rel="noopener"
            append-icon="mdi-open-in-new"
          >
            Launch live demo
          </v-btn>
          <v-btn
            size="large"
            class="text-none"
            variant="outlined"
            @click="scrollTo('capabilities')"
          >
            Explore capabilities
          </v-btn>
          <v-btn
            size="large"
            class="text-none"
            variant="text"
            :href="paperUrl"
            target="_blank"
            rel="noopener"
            append-icon="mdi-open-in-new"
          >
            Read the research
          </v-btn>
        </div>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="mt-8 mt-md-0"
      >
        <div class="sc-card hero-visual">
          <div class="hero-visual-head">
            <span class="live-dot" /> NOx · plant line 1
            <span class="ms-auto text-medium-emphasis">now → +30 min</span>
          </div>
          <motion.svg
            viewBox="0 0 520 190"
            width="100%"
            initial="hidden"
            animate="visible"
            role="img"
            aria-label="Illustration: measured signal followed by a forecast with uncertainty band"
          >
            <line
              v-for="y in [40, 80, 120, 160]"
              :key="'grid'+y"
              x1="20"
              :y1="y"
              x2="500"
              :y2="y"
              class="grid-line"
            />
            <line
              x1="340"
              y1="20"
              x2="340"
              y2="175"
              class="now-line"
            />
            <text
              x="346"
              y="32"
              class="chart-label"
            >now</text>
            <motion.path
              :d="bandPath"
              fill="rgba(79, 156, 255, 0.18)"
              stroke="none"
              :variants="fade"
              :custom="2"
            />
            <motion.path
              :d="actualPath"
              fill="none"
              stroke="#85BD58"
              stroke-width="4"
              stroke-linecap="round"
              :variants="draw"
              :custom="0"
            />
            <motion.path
              :d="forecastPath"
              fill="none"
              stroke="#4f9cff"
              stroke-width="4"
              stroke-dasharray="10 8"
              stroke-linecap="round"
              :variants="draw"
              :custom="1.6"
            />
          </motion.svg>
          <div class="d-flex flex-wrap ga-4 text-caption text-medium-emphasis mt-2">
            <span><span class="legend-swatch bg-measured" /> measured</span>
            <span><span class="legend-swatch bg-forecast" /> forecast</span>
            <span><span class="legend-swatch bg-band" /> P10–P90 band</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- HIGHLIGHT -->
    <v-row
      justify="center"
      class="py-6"
    >
      <v-col cols="12">
        <div class="sc-card highlight-card">
          <div class="flex-grow-1">
            <span class="card-index">NEW // WHAT-IF SIMULATION</span>
            <h3 class="text-h5 font-weight-bold mb-2">
              Try setpoints before you touch the plant
            </h3>
            <p class="text-body-2 text-medium-emphasis mb-0">
              The new what-if view estimates how sensors and emissions respond to setpoint changes, including the model uncertainty.
              Promising settings become proposals that a reviewer approves or rejects, with every step recorded in an audit trail.
              The machine stays under the operator's control.
            </p>
          </div>
          <v-btn
            color="#4f9cff"
            variant="flat"
            class="text-none flex-shrink-0"
            :href="demoUrl"
            target="_blank"
            rel="noopener"
            append-icon="mdi-open-in-new"
          >
            Try the demo
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- CAPABILITIES -->
    <v-row
      id="capabilities"
      class="py-12"
    >
      <v-col cols="12">
        <div class="section-head mb-8">
          <span class="section-num">01</span>
          <h2 class="text-h4 font-weight-bold mb-2">
            Core capabilities
          </h2>
          <p class="text-body-1 text-medium-emphasis">
            One platform from the edge device to the decision, covering the whole data chain of a technical facility.
          </p>
        </div>
        <v-row class="g-row">
          <v-col
            v-for="(cap, i) in capabilities"
            :key="cap.title"
            cols="12"
            sm="6"
            lg="4"
            class="d-flex"
          >
            <div class="sc-card sc-card-hover w-100">
              <div class="icon-box mb-4">
                <v-icon
                  :icon="cap.icon"
                  color="#4f9cff"
                />
              </div>
              <span class="card-index">CAPABILITY 0{{ i + 1 }}</span>
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ cap.title }}
              </h3>
              <p class="text-body-2 text-medium-emphasis mb-0">
                {{ cap.text }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- WORKFLOW -->
    <v-row class="py-12">
      <v-col cols="12">
        <div class="section-head mb-8">
          <span class="section-num">02</span>
          <h2 class="text-h4 font-weight-bold mb-2">
            Workflow
          </h2>
          <p class="text-body-1 text-medium-emphasis">
            Seven steps from a plant without data to a circular loop in which each decision produces new data for the next, better decision.
          </p>
        </div>

        <div class="pipeline-wrapper">
          <div class="pipeline">
            <div
              v-for="(step, i) in workflow"
              :key="step.label"
              class="pipeline-step"
            >
              <div :class="['step-circle', `step-circle--${step.phase}`]">
                {{ i + 1 }}
              </div>
              <h4 class="step-label">
                {{ step.label }}
              </h4>
              <p class="step-desc">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-center ga-6 mt-8">
          <div
            v-for="p in phases"
            :key="p.key"
            class="d-flex align-center ga-2 text-body-2"
          >
            <span :class="['phase-dot', `step-circle--${p.key}`]" />
            <strong>{{ p.name }}</strong>
            <span class="text-medium-emphasis">· {{ p.text }}</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- VALUES -->
    <v-row class="py-12">
      <v-col cols="12">
        <div class="section-head mb-8">
          <span class="section-num">03</span>
          <h2 class="text-h4 font-weight-bold mb-2">
            Built on AIRA's principles
          </h2>
          <p class="text-body-1 text-medium-emphasis">
            We optimize machines, not humans, and use only as much AI as the problem needs.
          </p>
        </div>
        <v-row class="g-row">
          <v-col
            v-for="(v, i) in values"
            :key="v.title"
            cols="12"
            md="4"
            class="d-flex"
          >
            <div class="sc-card sc-card-hover w-100">
              <span class="card-index">0{{ i + 1 }} // {{ v.title }}</span>
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ v.tagline }}
              </h3>
              <p class="text-body-2 text-medium-emphasis mb-0">
                {{ v.text }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- DEPLOYMENT -->
    <v-row class="py-12">
      <v-col cols="12">
        <div class="section-head mb-8">
          <span class="section-num">04</span>
          <h2 class="text-h4 font-weight-bold mb-2">
            Two ways to run it
          </h2>
          <p class="text-body-1 text-medium-emphasis">
            The same software, either operated by us or deployed inside your own infrastructure.
          </p>
        </div>
        <v-row class="g-row">
          <v-col
            v-for="d in deployments"
            :key="d.tag"
            cols="12"
            md="6"
            class="d-flex"
          >
            <div class="sc-card sc-card-hover w-100">
              <span class="card-index">{{ d.tag }}</span>
              <h3 class="text-h5 font-weight-bold mb-2">
                {{ d.title }}
              </h3>
              <p class="text-body-2 text-medium-emphasis mb-4">
                {{ d.text }}
              </p>
              <ul class="check-list">
                <li
                  v-for="pt in d.points"
                  :key="pt"
                >
                  <v-icon
                    icon="mdi-check"
                    size="small"
                    color="#85BD58"
                  />
                  {{ pt }}
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- STACK -->
    <v-row class="py-12">
      <v-col cols="12">
        <div class="section-head mb-8">
          <span class="section-num">05</span>
          <h2 class="text-h4 font-weight-bold mb-2">
            Platform stack
          </h2>
          <p class="text-body-1 text-medium-emphasis">
            Proven open-source components, integrated and operated by AIRA.
          </p>
        </div>
        <div class="table-wrap">
          <table class="specs-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Technology</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in stack"
                :key="row.layer"
              >
                <td><strong>{{ row.layer }}</strong></td>
                <td class="mono">
                  {{ row.tech }}
                </td>
                <td class="text-medium-emphasis">
                  {{ row.role }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-col>
    </v-row>

    <!-- RESEARCH + CTA -->
    <v-row class="py-12">
      <v-col cols="12">
        <div class="sc-card cta-banner text-center">
          <span class="card-index">RESEARCH-BACKED</span>
          <h3 class="text-h4 font-weight-bold mb-3">
            Ready to connect your plant?
          </h3>
          <p class="text-body-1 text-medium-emphasis mb-6 mx-auto cta-text">
            Sensor Cloud grew out of EmissionTech, our research on reducing NOx emissions in biochar pyrolysis plants with machine learning,
            presented at NeurIPS 2024 (Tackling Climate Change with Machine Learning).
            We start every engagement with a feasibility study to check where AI creates real value for your process.
          </p>
          <div class="d-flex flex-wrap justify-center ga-3">
            <v-btn
              color="#4f9cff"
              size="large"
              variant="flat"
              class="text-none"
              :href="demoUrl"
              target="_blank"
              rel="noopener"
              append-icon="mdi-open-in-new"
            >
              Launch live demo
            </v-btn>
            <v-btn
              size="large"
              variant="outlined"
              class="text-none"
              :to="{ name: 'contact' }"
            >
              Start a feasibility study
            </v-btn>
            <v-btn
              size="large"
              variant="text"
              class="text-none"
              :href="paperUrl"
              target="_blank"
              rel="noopener"
              append-icon="mdi-open-in-new"
            >
              Read the paper
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.sensor-cloud {
  max-width: 1280px;
  margin: 0 auto;
  --sc-accent: #4f9cff;
  --sc-border: rgba(var(--v-theme-on-surface), 0.08);
  --sc-surface: rgba(var(--v-theme-on-surface), 0.025);
}

.hero-row { min-height: calc(90vh - var(--v-layout-top)); }

.hero-title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  line-height: 1.12;
  letter-spacing: -1px;
}

.accent-text {
  background: linear-gradient(90deg, #4f9cff 0%, #85BD58 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-tag {
  color: var(--sc-accent);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
}

.section-head { max-width: 720px; }

.section-num {
  display: inline-block;
  font-family: monospace;
  font-size: 13px;
  color: var(--sc-accent);
  border: 1px solid rgba(79, 156, 255, 0.35);
  border-radius: 6px;
  padding: 2px 8px;
  margin-bottom: 12px;
}

/* Cards */
.sc-card {
  background: var(--sc-surface);
  border: 1px solid var(--sc-border);
  border-radius: 14px;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.sc-card-hover { transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1); }

.sc-card-hover:hover {
  transform: translateY(-4px);
  border-color: rgba(79, 156, 255, 0.35);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
}

.card-index {
  display: block;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 1px;
  color: rgba(79, 156, 255, 0.8);
  margin-bottom: 6px;
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 156, 255, 0.06);
  border: 1px solid rgba(79, 156, 255, 0.2);
}

.g-row { row-gap: 8px; }

/* Hero visual */
.hero-visual { padding: 20px 20px 16px; }

.hero-visual-head {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: monospace;
  font-size: 12px;
  margin-bottom: 8px;
}

.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #85BD58;
  box-shadow: 0 0 0 0 rgba(133, 189, 88, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(133, 189, 88, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(133, 189, 88, 0); }
  100% { box-shadow: 0 0 0 0 rgba(133, 189, 88, 0); }
}

.grid-line { stroke: rgba(var(--v-theme-on-surface), 0.08); stroke-width: 1; }
.now-line { stroke: rgba(var(--v-theme-on-surface), 0.3); stroke-width: 1.5; stroke-dasharray: 4 4; }
.chart-label { fill: rgba(var(--v-theme-on-surface), 0.55); font-size: 12px; font-family: monospace; }

.legend-swatch {
  display: inline-block;
  width: 14px;
  height: 4px;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 4px;
}
.bg-measured { background: #85BD58; }
.bg-forecast { background: #4f9cff; }
.bg-band { background: rgba(79, 156, 255, 0.35); height: 10px; }

/* Highlight */
.highlight-card {
  display: flex;
  align-items: center;
  gap: 24px;
  border-color: rgba(79, 156, 255, 0.3);
  background: linear-gradient(120deg, rgba(79, 156, 255, 0.08) 0%, rgba(133, 189, 88, 0.05) 100%);
}

@media (max-width: 959px) {
  .highlight-card { flex-direction: column; align-items: flex-start; }
}

/* Pipeline */
.pipeline-wrapper { overflow-x: auto; padding-bottom: 8px; }

.pipeline {
  display: grid;
  grid-template-columns: repeat(7, minmax(120px, 1fr));
  position: relative;
  min-width: 860px;
}

.pipeline::before {
  content: '';
  position: absolute;
  top: 22px;
  left: 7%;
  right: 7%;
  height: 2px;
  background: linear-gradient(90deg, #4f9cff 0%, #8b5cf6 50%, #85BD58 100%);
  opacity: 0.45;
}

.pipeline-step {
  text-align: center;
  padding: 0 8px;
  position: relative;
}

.step-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  position: relative;
  z-index: 1;
}

.step-circle--blue { background: #4f9cff; }
.step-circle--purple { background: #8b5cf6; }
.step-circle--green { background: #6aa843; }

.step-label { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
.step-desc { font-size: 13px; opacity: 0.65; line-height: 1.35; }

.phase-dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }

/* Lists & table */
.check-list { list-style: none; padding: 0; margin: 0; }
.check-list li { padding: 3px 0; font-size: 14px; }

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--sc-border);
  border-radius: 14px;
}

.specs-table { width: 100%; border-collapse: collapse; font-size: 14px; }

.specs-table th {
  text-align: left;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--sc-accent);
  padding: 14px 18px;
  background: var(--sc-surface);
  border-bottom: 1px solid var(--sc-border);
}

.specs-table td {
  padding: 13px 18px;
  border-bottom: 1px solid var(--sc-border);
  vertical-align: top;
}

.specs-table tbody tr:last-child td { border-bottom: none; }
.specs-table tbody tr:hover td { background: rgba(79, 156, 255, 0.04); }
.mono { font-family: monospace; font-size: 13px; }

/* CTA */
.cta-banner {
  padding: 48px 24px;
  background: linear-gradient(160deg, rgba(79, 156, 255, 0.08) 0%, rgba(var(--v-theme-on-surface), 0.02) 100%);
}
.cta-text { max-width: 720px; }
</style>
