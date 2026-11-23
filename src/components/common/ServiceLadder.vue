<script lang="ts" setup>
    import { serviceLadder } from '@/content/site'
</script>

<template>
  <div class="ladder-wrapper">
    <div class="ladder">
      <div
        v-for="(s, i) in serviceLadder"
        :key="s.step"
        class="ladder-step"
      >
        <div :class="['ladder-circle', `ladder-circle--${s.color}`]">
          {{ i + 1 }}
        </div>
        <h4 class="ladder-label">
          {{ s.step }}
        </h4>
        <p class="ladder-desc">
          {{ s.text }}
        </p>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-center ga-6 mt-6 text-body-2">
      <span><span class="dot ladder-circle--blue" /> <strong>Transparency</strong> <span class="aira-muted">· data</span></span>
      <span><span class="dot ladder-circle--purple" /> <strong>Inspect</strong> <span class="aira-muted">· insight</span></span>
      <span><span class="dot ladder-circle--green" /> <strong>Adapt</strong> <span class="aira-muted">· decision</span></span>
    </div>
  </div>
</template>

<style scoped>
.ladder-wrapper { overflow-x: auto; padding: 4px 8px 12px 4px; }
.ladder {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  position: relative;
  min-width: 760px;
}
.ladder::before {
  content: '';
  position: absolute;
  top: 26px; left: 10%; right: 10%;
  border-top: 3px dashed var(--nb-ink);
}
.ladder-step { text-align: center; padding: 0 10px; position: relative; }
.ladder-circle {
  width: 54px; height: 54px; margin: 0 auto 14px;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 20px;
  color: var(--nb-black);
  border: 3px solid var(--nb-ink);
  box-shadow: 4px 4px 0 var(--nb-ink);
  position: relative; z-index: 1;
}
.ladder-circle--blue { background: var(--nb-slate); }
.ladder-circle--purple { background: var(--nb-coral); }
.ladder-circle--green { background: var(--nb-sand); }
.ladder-label { font-size: 16px; font-weight: 700; margin-bottom: 4px; text-transform: uppercase; }
.ladder-desc { font-size: 14px; opacity: 0.78; line-height: 1.35; margin: 0; }
.dot { display: inline-block; width: 12px; height: 12px; margin-right: 4px; border: 2px solid var(--nb-ink); vertical-align: -1px; }
</style>
