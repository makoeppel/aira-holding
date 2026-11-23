<script lang="ts" setup>
    withDefaults(defineProps<{
        num?: string
        tag?: string
        title: string
        subtitle?: string
        center?: boolean
    }>(), { center: false })
</script>

<template>
  <div :class="['mb-8', center ? 'text-center mx-auto' : '', 'aira-measure']">
    <span
      v-if="num"
      class="aira-num"
    >{{ num }}</span>
    <div
      v-if="tag"
      class="aira-tag mb-2"
    >
      {{ tag }}
    </div>
    <h2 class="text-h4 font-weight-bold mb-3">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="aira-lead mb-0"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
