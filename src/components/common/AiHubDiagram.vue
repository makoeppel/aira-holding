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
    style="max-width: 760px; display: block; margin: 0 auto;"
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
          class="arrow-data"
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
          class="arrow-opt"
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
        class="flow-data"
        marker-end="url(#hubArrow)"
      />
      <line
        x1="300"
        :y1="150 + 14 + (i - 1) * 8"
        x2="178"
        :y2="y + 10"
        class="flow-opt"
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
      class="node-title on-fill"
    >Data Trustee</text>
    <text
      x="400"
      y="154"
      text-anchor="middle"
      class="node-sub on-fill"
    >cooperative, owned &amp;</text>
    <text
      x="400"
      y="172"
      text-anchor="middle"
      class="node-sub on-fill"
    >governed by members</text>

    <!-- AIRA -->
    <line
      x1="498"
      y1="135"
      x2="585"
      y2="135"
      class="flow-data"
      marker-end="url(#hubArrow)"
    />
    <line
      x1="585"
      y1="168"
      x2="500"
      y2="168"
      class="flow-opt"
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
      class="node-title on-fill"
    >AIRA</text>
    <text
      x="665"
      y="166"
      text-anchor="middle"
      class="node-sub on-fill"
    >develops &amp; provides AI</text>

    <!-- legend -->
    <line
      x1="330"
      y1="268"
      x2="360"
      y2="268"
      class="flow-data"
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
      class="flow-opt"
    />
    <text
      x="456"
      y="272"
      class="node-sub"
    >optimized data</text>
  </svg>
</template>

<style scoped>
.node { fill: var(--nb-card); stroke: var(--nb-ink); stroke-width: 3; }
.node--trustee { fill: var(--nb-sand); }
.node--aira { fill: var(--nb-coral); }
.node-title { fill: rgb(var(--v-theme-on-surface)); font-size: 17px; font-weight: 700; font-family: var(--font-body); }
.node-sub { fill: rgba(var(--v-theme-on-surface), 0.75); font-size: 13px; font-family: var(--font-body); }
.on-fill { fill: #1A1A1A !important; }
.flow-data { stroke: var(--nb-ink); stroke-width: 3; }
.flow-opt { stroke: var(--nb-orange); stroke-width: 3; stroke-dasharray: 7 5; }
.arrow-data { fill: var(--nb-ink); }
.arrow-opt { fill: var(--nb-orange); }
</style>
