<script lang="ts" setup>
    import { motion } from 'motion-v'

    // Animated schematic of a pyrolysis plant with an ML optimizer:
    // input -> reactor -> biochar + NOx, optimizer minimizing emissions.
    const draw = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: (i: number) => {
        const delay = i * 0.5
        return {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
            opacity: { delay, duration: 0.01 },
          },
        }
      },
    }

    const image = { width: "100%", height: "auto", maxWidth: "1100px" }
</script>

<template>
<motion.svg
    width="1100"
    height="550"
    viewBox="0 0 1100 550"
    initial="hidden"
    while-in-view="visible"
    :in-view-options="{ once: true }"
    :style="image"
  >
    <!-- Input -->
    <motion.rect
      x="70"
      y="240"
      width="150"
      height="70"
      rx="16"
      fill="#85BD58"
      stroke="#9ca0a5"
      stroke-width="5"
      :variants="draw"
      :custom="1"
    />
    <text x="155" y="285" fill="white" font-size="32" text-anchor="middle">
      Input
    </text>

    <!-- Pipe -->
    <motion.line
      x1="220"
      y1="275"
      x2="410"
      y2="275"
      stroke="#9ca0a5"
      stroke-width="8"
      :variants="draw"
      :custom="2"
    />

    <!-- Green particles -->
    <motion.circle
      v-for="i in 4"
      :key="'g'+i"
      :cx="220 + i * 35"
      cy="275"
      r="10"
      fill="#83BE55"
      :variants="draw"
      :custom="i"
    />

    <text
      x="585"
      y="65"
      text-anchor="middle"
      font-size="24"
      class="anim-title"
      font-weight="600"
    >
      ML Optimizer
    </text>

    <text
      x="585"
      y="92"
      text-anchor="middle"
      font-size="18"
      class="anim-sub"
    >
      Continuously minimizing of emissions
    </text>

    <motion.path
      d="M585 105 V180"
      stroke="#4f7cff"
      stroke-width="3"
      stroke-dasharray="8 6"
      marker-end="url(#blueArrow)"
      :variants="draw"
      :custom="14"
    />

    <marker
      id="blueArrow"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto"
    >
      <path d="M0 0L10 5L0 10Z" fill="#4f7cff"/>
    </marker>

    <!-- Inner reactor -->
    <motion.rect
      x="410"
      y="195"
      width="350"
      height="180"
      rx="30"
      fill="none"
      stroke="#9ca0a5"
      stroke-width="8"
      :variants="draw"
      :custom="5"
    />

    <!-- Heating element -->
    <motion.path
      d="M470 285
        L495 235
        L520 315
        L545 235
        L570 315
        L595 235
        L620 315
        L645 235
        L670 315
        L695 245"
      fill="none"
      stroke="#8d9399"
      stroke-width="8"
      stroke-linejoin="round"
      stroke-linecap="round"
      :variants="draw"
      :custom="6"
    />

    <!-- Catalyst -->
    <motion.circle
      v-for="(p,i) in [
        [535-15,255],[580-10,255],[625-5,255],[670,255],
        [505-15,305],[550-5,305],[595,305],[640+5,305],[685+10,305]
      ]"
      :key="'c'+i"
      :cx="p[0]"
      :cy="p[1]"
      r="8"
      fill="#d95a5a"
      :variants="draw"
      :custom="7"
    />

    <!-- Outlet split -->
    <motion.line
      x1="760"
      y1="340"
      x2="900"
      y2="340"
      stroke="#9ca0a5"
      stroke-width="8"
      :variants="draw"
      :custom="8"
    />

    <motion.line
      x1="760"
      y1="230"
      x2="900"
      y2="230"
      stroke="#9ca0a5"
      stroke-width="8"
      :variants="draw"
      :custom="8"
    />

    <!-- BioChar output -->
    <motion.rect
      x="900"
      y="300"
      width="140"
      height="70"
      rx="16"
      fill="#000"
      stroke="#9ca0a5"
      stroke-width="5"
      :variants="draw"
      :custom="12"
    />

    <text
      x="970"
      y="345"
      fill="white"
      font-size="26"
      text-anchor="middle"
    >
      BioChar
    </text>

    <!-- NOx emissions output -->
    <motion.rect
      x="900"
      y="190"
      width="140"
      height="70"
      rx="16"
      fill="#d95a5a"
      stroke="#9ca0a5"
      stroke-width="5"
      :variants="draw"
      :custom="13"
    />

    <text
      x="970"
      y="235"
      fill="white"
      font-size="26"
      text-anchor="middle"
    >
      NOx
    </text>

  </motion.svg>
</template>

<style scoped>
.anim-title { fill: rgba(var(--v-theme-on-surface), 0.85); }
.anim-sub { fill: rgba(var(--v-theme-on-surface), 0.6); }
</style>
