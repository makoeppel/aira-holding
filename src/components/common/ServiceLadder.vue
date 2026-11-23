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
.ladder-wrapper { overflow-x: auto; padding-bottom: 8px; }
.ladder {
  display: grid;
  grid-template-columns: repeat(5, minmax(140px, 1fr));
  position: relative;
  min-width: 720px;
}
.ladder::before {
  content: '';
  position: absolute;
  top: 22px; left: 10%; right: 10%; height: 2px;
  background: linear-gradient(90deg, #4f9cff 0%, #8b5cf6 50%, #85BD58 100%);
  opacity: 0.45;
}
.ladder-step { text-align: center; padding: 0 10px; position: relative; }
.ladder-circle {
  width: 44px; height: 44px; border-radius: 50%; margin: 0 auto 12px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; color: #fff; position: relative; z-index: 1;
}
.ladder-circle--blue { background: #4f9cff; }
.ladder-circle--purple { background: #8b5cf6; }
.ladder-circle--green { background: #6aa843; }
.ladder-label { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
.ladder-desc { font-size: 13px; opacity: 0.68; line-height: 1.35; margin: 0; }
.dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 4px; }
</style>
