<script lang="ts" setup>
    // AI Hub schematic: operators <-> data trustee <-> AIRA (AI provider)
</script>

<template>
  <svg
    viewBox="0 0 760 300"
    width="100%"
    role="img"
    aria-label="AI Hub: operators share data with a cooperative data trustee, AIRA provides the AI, optimized data flow back to the operators"
    class="ai-hub"
  >
    <defs>
      <marker
        id="hubArrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path
          d="M0 0L10 5L0 10Z"
          fill="#4f9cff"
        />
      </marker>
      <marker
        id="hubArrowGreen"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path
          d="M0 0L10 5L0 10Z"
          fill="#85BD58"
        />
      </marker>
    </defs>

    <!-- operators -->
    <g
      v-for="(y, i) in [50, 150, 250]"
      :key="'op'+i"
    >
      <rect
        x="20"
        :y="y - 28"
        width="150"
        height="56"
        rx="12"
        class="node"
      />
      <text
        x="95"
        :y="y - 2"
        text-anchor="middle"
        class="node-title"
      >Operator {{ ['A', 'B', 'C'][i] }}</text>
      <text
        x="95"
        :y="y + 16"
        text-anchor="middle"
        class="node-sub"
      >plant data</text>
      <line
        x1="175"
        :y1="y - 8"
        x2="300"
        :y2="150 - 14 + i * 8"
        stroke="#4f9cff"
        stroke-width="2.5"
        marker-end="url(#hubArrow)"
      />
      <line
        x1="300"
        :y1="150 + 14 + (i - 1) * 8"
        x2="178"
        :y2="y + 10"
        stroke="#85BD58"
        stroke-width="2.5"
        stroke-dasharray="6 5"
        marker-end="url(#hubArrowGreen)"
      />
    </g>

    <!-- data trustee -->
    <rect
      x="305"
      y="85"
      width="190"
      height="130"
      rx="18"
      class="node node--trustee"
    />
    <text
      x="400"
      y="132"
      text-anchor="middle"
      class="node-title"
    >Data Trustee</text>
    <text
      x="400"
      y="154"
      text-anchor="middle"
      class="node-sub"
    >cooperative, owned &amp;</text>
    <text
      x="400"
      y="172"
      text-anchor="middle"
      class="node-sub"
    >governed by members</text>

    <!-- AIRA -->
    <line
      x1="498"
      y1="135"
      x2="585"
      y2="135"
      stroke="#4f9cff"
      stroke-width="2.5"
      marker-end="url(#hubArrow)"
    />
    <line
      x1="585"
      y1="168"
      x2="500"
      y2="168"
      stroke="#85BD58"
      stroke-width="2.5"
      stroke-dasharray="6 5"
      marker-end="url(#hubArrowGreen)"
    />
    <rect
      x="590"
      y="100"
      width="150"
      height="100"
      rx="16"
      class="node node--aira"
    />
    <text
      x="665"
      y="145"
      text-anchor="middle"
      class="node-title"
    >AIRA</text>
    <text
      x="665"
      y="166"
      text-anchor="middle"
      class="node-sub"
    >develops &amp; provides AI</text>

    <!-- legend -->
    <line
      x1="330"
      y1="268"
      x2="360"
      y2="268"
      stroke="#4f9cff"
      stroke-width="2.5"
    />
    <text
      x="366"
      y="272"
      class="node-sub"
    >data</text>
    <line
      x1="420"
      y1="268"
      x2="450"
      y2="268"
      stroke="#85BD58"
      stroke-width="2.5"
      stroke-dasharray="6 5"
    />
    <text
      x="456"
      y="272"
      class="node-sub"
    >optimized data</text>
  </svg>
</template>

<style scoped>
.node { fill: rgba(var(--v-theme-on-surface), 0.04); stroke: rgba(var(--v-theme-on-surface), 0.18); stroke-width: 1.5; }
.node--trustee { fill: rgba(79, 156, 255, 0.10); stroke: #4f9cff; }
.node--aira { fill: rgba(133, 189, 88, 0.12); stroke: #85BD58; }
.node-title { fill: rgb(var(--v-theme-on-surface)); font-size: 17px; font-weight: 700; }
.node-sub { fill: rgba(var(--v-theme-on-surface), 0.65); font-size: 13px; }
</style>
