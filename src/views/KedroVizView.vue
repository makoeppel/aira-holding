<template>
  <div class="kedro-viz-page">
    <iframe
      src="/kedro-viz/index.html"
      class="kedro-frame"
      title="Kedro Viz"
    />
  </div>
</template>

<script setup>
// No logic required
</script>

<style scoped>
.kedro-viz-page {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.kedro-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>