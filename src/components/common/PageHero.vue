<script lang="ts" setup>
    defineProps<{
        tag: string
        title: string
        highlight?: string
        subtitle?: string
    }>()
</script>

<template>
  <v-row class="aira-section pb-6">
    <v-col
      cols="12"
      lg="9"
    >
      <div class="aira-tag mb-3">
        {{ tag }}
      </div>
      <h1 class="aira-page-title mb-5">
        {{ title }}
        <span
          v-if="highlight"
          class="aira-gradient-text"
        >{{ highlight }}</span>
      </h1>
      <p
        v-if="subtitle"
        class="aira-lead aira-measure mb-6"
      >
        {{ subtitle }}
      </p>
      <div class="d-flex flex-wrap ga-3">
        <slot />
      </div>
    </v-col>
  </v-row>
</template>
