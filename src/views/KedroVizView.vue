<template>
  <div class="kedro-viz-page">
    <div class="kedro-viz-container">
      <iframe
        src="/kedro-viz/index.html"
        class="kedro-frame"
        title="Kedro Viz"
      />
    </div>
  </div>
</template>

<style scoped>
.kedro-viz-page {
  height: 100%;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
}

.kedro-viz-container {
  height: calc(100vh - 120px);
  max-width: 1800px;
  margin: 0 auto;

  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  background: white;
}

.kedro-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>