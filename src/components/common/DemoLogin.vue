<script lang="ts" setup>
    // Public credentials for the AIRA One demo instance
    import { links } from '@/content/site'
</script>

<template>
  <div
    class="demo-login"
    role="note"
    aria-label="Demo login credentials"
  >
    <span class="demo-login-label">Demo login</span>
    <span>user <code>{{ links.demoUser }}</code></span>
    <span>password <code>{{ links.demoPassword }}</code></span>
  </div>
</template>

<style scoped>
.demo-login {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 12px;
  font-family: var(--font-mono);
  font-size: 13px;
  padding: 6px 12px 6px 6px;
  background: var(--nb-card);
  color: var(--nb-text);
  border: 2px solid var(--nb-ink);
  box-shadow: 3px 3px 0 var(--nb-ink);
}
.demo-login-label {
  background: var(--nb-ink);
  color: var(--nb-bg);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1px;
  padding: 2px 8px;
}
code {
  font-family: var(--font-mono);
  font-weight: 700;
  background: var(--nb-sand);
  color: #1A1A1A;
  padding: 0 6px;
  border: 1.5px solid var(--nb-ink);
}
</style>
