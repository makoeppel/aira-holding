<script lang="ts" setup>
import { computed, reactive } from 'vue';

export type SliderItem = {
  name: string;
  url: string;
  logoSrc?: string;
};

const props = withDefaults(
  defineProps<{
    title?: string;
    items: SliderItem[];
    speedSeconds?: number;
    logoHeight?: number;
    gap?: number;
  }>(),
  {
    speedSeconds: 28,
    logoHeight: 44,
    gap: 56,
  }
);

const failed = reactive<Record<string, boolean>>({});

const normalizedItems = computed(() =>
  props.items.map((it) => {
    let host = it.url;
    try {
      host = new URL(it.url).hostname;
    } catch {
      // ignore
    }

    const clearbit = `https://logo.clearbit.com/${host}`;
    const favicon = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;

    return {
      ...it,
      host,
      clearbit,
      favicon,
    };
  })
);

const loopItems = computed(() => {
  const base = normalizedItems.value;
  return base.length ? [...base, ...base] : [];
});

function logoSrcFor(item: any) {
  if (item.logoSrc) return item.logoSrc;
  return failed[item.url] ? item.favicon : item.clearbit;
}

function onLogoError(item: any) {
  failed[item.url] = true;
}
</script>

<template>
  <div class="logo-strip">
    <h3
      v-if="title"
      class="text-h6 mb-3"
    >
      {{ title }}
    </h3>

    <div
      class="marquee"
      :style="{ '--duration': `${speedSeconds}s`, '--gap': `${gap}px` }"
      role="region"
      aria-label="Partner logos"
    >
      <div class="marquee__track">
        <a
          v-for="(item, idx) in loopItems"
          :key="`${item.url}-${idx}`"
          class="marquee__item"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="item.name"
        >
          <v-img
            :src="logoSrcFor(item)"
            :alt="`${item.name} logo`"
            :height="logoHeight"
            :width="logoHeight * 3"
            contain
            @error="() => onLogoError(item)"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-strip {
  width: 100%;
}

.marquee {
  --duration: 28s;
  --gap: 56px;

  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 8px 0;
}

.marquee__track {
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: max-content;
  animation: marquee var(--duration) linear infinite;
}

.marquee__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  opacity: 0.92;
  transition: opacity 150ms ease, transform 150ms ease;
}

.marquee__item:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}
</style>
