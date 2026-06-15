<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" md="9">

        <div class="form-card">

          <h2 class="title">IXON → Data Platform Config Builder</h2>
          <p class="subtitle">
            Generate YAML configs + Superset Virtual Dataset SQL for Pyreg digital twin pipeline.
          </p>

          <!-- ================= COMPANY ================= -->
          <h3 class="section-title">Company</h3>

          <label class="label">Company Public ID</label>
          <input class="input" v-model="config.machine.companie.publicId" />

          <label class="label">Company Name</label>
          <input class="input" v-model="config.machine.companie.name" />

          <!-- ================= AGENT ================= -->
          <h3 class="section-title">Agent</h3>

          <label class="label">Agent Public ID</label>
          <input class="input" v-model="config.machine.agent.publicId" />

          <!-- ================= DATA SOURCE ================= -->
          <h3 class="section-title">Data Source</h3>

          <label class="label">Data Source Public ID</label>
          <input class="input" v-model="config.machine.data_source.publicId" />

          <label class="label">Data Source Name</label>
          <input class="input" v-model="config.machine.data_source.name" />

          <!-- ================= SETTINGS ================= -->
          <h3 class="section-title">Settings</h3>

          <label class="label">InfluxDB Token Env</label>
          <input class="input" v-model="config.settings.influxdb.token_env" />

          <label class="label">InfluxDB URL</label>
          <input class="input" v-model="config.settings.influxdb.url" />

          <label class="label">InfluxDB Database</label>
          <input class="input" v-model="config.settings.influxdb.database" />

          <hr style="opacity:0.1; margin:15px 0;" />

          <label class="label">TimescaleDB Host</label>
          <input class="input" v-model="config.settings.timescaledb.host" />

          <label class="label">TimescaleDB DB</label>
          <input class="input" v-model="config.settings.timescaledb.database" />

          <label class="label">TimescaleDB User</label>
          <input class="input" v-model="config.settings.timescaledb.user" />

          <label class="label">TimescaleDB Password</label>
          <input class="input" v-model="config.settings.timescaledb.password" />

          <hr style="opacity:0.1; margin:15px 0;" />

          <label class="label">IXON Application ID</label>
          <input class="input" v-model="config.settings.ixon.application_id_env" />

          <label class="label">IXON Email Env</label>
          <input class="input" v-model="config.settings.ixon.email_env" />

          <label class="label">IXON Password Env</label>
          <input class="input" v-model="config.settings.ixon.password_env" />

          <label class="label">IXON Base URL</label>
          <input class="input" v-model="config.settings.ixon.base_url" />

          <!-- ================= EXPORT ================= -->
          <h3 class="section-title">Export Settings</h3>

          <label class="label">Export Time (days)</label>
          <input class="input" type="number" v-model="config.machine.export_days" />

          <!-- ================= TAGS ================= -->
          <h3 class="section-title">Tags</h3>

          <div v-for="(tag, i) in config.machine.tags" :key="i">

            <label class="label">Label (SQL Column Name)</label>
            <input class="input" v-model="tag.label" />

            <label class="label">Metric (IXON / DB Key)</label>
            <input class="input" v-model="tag.metric" />

            <!-- NEW: MIN / MAX -->
            <label class="label">Min Value</label>
            <input class="input" type="number" v-model.number="tag.min" />

            <label class="label">Max Value</label>
            <input class="input" type="number" v-model.number="tag.max" />

            <!-- NEW: prediction target -->
            <label class="label">
              <input type="checkbox" v-model="tag.predictionTarget" />
              Prediction Target
            </label>

            <button class="small-btn" @click="removeTag(i)">X</button>

            <hr style="opacity:0.08; margin:12px 0;" />
          </div>

          <button class="button secondary" @click="addTag">
            + Add Tag
          </button>

          <!-- ================= YAML OUTPUT ================= -->
          <h3 class="section-title">YAML Output</h3>

          <button class="button" @click="copyYaml">Copy YAML</button>
          <pre class="box">{{ yamlOutput }}</pre>

          <!-- ================= SQL OUTPUT ================= -->
          <h3 class="section-title">Superset SQL</h3>

          <button class="button" @click="copySQL">Copy SQL</button>
          <pre class="box">{{ sqlQuery }}</pre>

        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, computed } from "vue";
import yaml from "js-yaml";

/* ================= CONFIG ================= */
const config = reactive({
  settings: {
    influxdb: {
      token_env: "123",
      url: "http://localhost:8181",
      database: "mydb",
    },
    timescaledb: {
      host: "localhost",
      port: 5432,
      database: "metrics",
      user: "tsdb",
      password: "tsdb",
    },
    ixon: {
      application_id_env: "123",
      email_env: "123",
      password_env: "123",
      base_url: "https://portal.ixon.cloud:443/api/",
    },
  },

  machine: {
    companie: {
      publicId: "123",
      name: "PYREG GmbH",
    },

    agent: {
      publicId: "123",
    },

    data_source: {
      publicId: "123",
      name: "9054 Kleve",
    },

    export_days: 2,

    tags: [
      {
        label: "Druck Brennkammer",
        metric: "24pt012",
        min: null,
        max: null,
        predictionTarget: false,
      },
      {
        label: "Temperatur Lambda Brennkammer",
        metric: "24tt163",
        min: null,
        max: null,
        predictionTarget: false,
      },
    ],
  },
});

/* ================= YAML ================= */
const yamlOutput = computed(() =>
  yaml.dump(config, { noRefs: true })
);

/* ================= SQL ================= */
const sqlQuery = computed(() => {
  const machine = config.machine.data_source.name || "UNKNOWN";

  const cols = config.machine.tags
    .filter(t => t.metric)
    .map(t => {
      return `
  MAX(value) FILTER (WHERE metric = '${t.metric}') AS "${t.label}"`;
    })
    .join(",");

  return `
-- Company: ${config.machine.companie.name}
-- Export window: last ${config.machine.export_days} days

SELECT
  DATE_TRUNC('seconds', ts) AS ts,
  BOOL_OR(prediction) AS prediction,
${cols}
FROM public.measurements
WHERE machine = '${machine}'
  AND ts >= NOW() - INTERVAL '${config.machine.export_days} days'
GROUP BY DATE_TRUNC('seconds', ts)
ORDER BY ts;
`.trim();
});

/* ================= ACTIONS ================= */
function addTag() {
  config.machine.tags.push({
    label: "",
    metric: "",
    min: null,
    max: null,
    predictionTarget: false,
  });
}

function removeTag(i) {
  config.machine.tags.splice(i, 1);
}

function copyYaml() {
  navigator.clipboard.writeText(yamlOutput.value);
}

function copySQL() {
  navigator.clipboard.writeText(sqlQuery.value);
}
</script>

<style scoped>
.form-card {
  background: #121212;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 28px;
  color: white;
  text-align: left;
}

.title { font-size: 22px; margin-bottom: 6px; }
.subtitle { font-size: 14px; opacity: 0.6; margin-bottom: 20px; }

.section-title {
  margin-top: 22px;
  font-size: 16px;
  opacity: 0.85;
}

.label {
  display:block;
  margin-top:12px;
  font-size:13px;
  opacity:0.8;
}

.input {
  width:100%;
  background:#1e1e1e;
  border:1px solid rgba(255,255,255,0.1);
  border-radius:10px;
  padding:10px;
  color:white;
}

.button {
  margin-top:10px;
  width:100%;
  padding:12px;
  border-radius:10px;
  background:#4f9cff;
  border:none;
  color:white;
  cursor:pointer;
}

.button.secondary {
  background:#2a2a2a;
}

.small-btn {
  margin-top:8px;
  padding:6px 10px;
  border:none;
  border-radius:8px;
  background:#2a2a2a;
  color:white;
  cursor:pointer;
}

.box {
  margin-top:10px;
  background:#0d0d0d;
  padding:12px;
  border-radius:10px;
  color:#9effa1;
  overflow-x:auto;
}
</style>