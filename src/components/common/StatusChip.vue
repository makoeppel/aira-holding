<script lang="ts" setup>
    import { statusLabel, type Status } from '@/content/site'
    defineProps<{ status: Status }>()
</script>

<template>
  <span :class="['aira-status', `aira-status--${status}`]">{{ statusLabel[status] }}</span>
</template>
