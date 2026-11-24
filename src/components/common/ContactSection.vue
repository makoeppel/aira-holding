<script lang="ts" setup>
import { onMounted } from 'vue'

withDefaults(defineProps<{ title?: string, subtitle?: string }>(), {
  title: "Let's work together",
  subtitle: 'Tell us about your facility or project.'
})

onMounted(() => {
  const scriptSrc = 'https://contact.aira-holding.de/form-token.js'
  // Avoid injecting duplicate scripts if the component re-mounts
  if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
    const s = document.createElement('script')
    s.src = scriptSrc
    s.defer = true
    document.body.appendChild(s)
  }
})
</script>

<template>
  <v-row
    id="contact"
    justify="center"
    class="aira-section"
  >
    <v-col
      cols="12"
      md="8"
      lg="6"
    >
      <div class="aira-card contact-card">
        <span class="aira-tag mb-4 align-self-start">Contact</span>
        <h2 class="text-h5 font-weight-bold mb-1">
          {{ title }}
        </h2>
        <p class="aira-muted text-body-2 mb-4">
          {{ subtitle }}
        </p>

        <form
          action="https://contact.aira-holding.de/f/contact"
          method="POST"
        >
          <!-- Honeypot field for hugo-contact spam protection -->
          <input
            type="text"
            name="_gotcha"
            style="display: none"
            tabindex="-1"
            autocomplete="off"
          >

          <label class="label">Name</label>
          <input
            class="input"
            type="text"
            name="name"
            placeholder="Your name"
            required
          >

          <label class="label">Email</label>
          <input
            class="input"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          >

          <label class="label">Message</label>
          <textarea
            class="input"
            name="message"
            placeholder="Your message..."
            rows="4"
            required
          />

          <label class="checkbox">
            <input
              type="checkbox"
              name="consent"
              required
            >
            <span>I agree that my email address is used to answer my message.</span>
          </label>

          <p class="privacy-text">
            I have read the <a href="#/imprint">privacy policy</a>. Your message will be processed directly via our own mail server to respond to your inquiry. You can revoke your consent at any time.
          </p>

          <button
            class="button"
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.contact-card { padding: 32px; }
.label { display: block; font-family: var(--font-mono); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 16px 0 6px; }
.input {
  width: 100%;
  background: var(--nb-bg);
  border: 3px solid var(--nb-ink);
  border-radius: 0;
  padding: 12px 14px;
  color: inherit;
  outline: none;
  font-size: 15px;
  font-family: inherit;
  transition: box-shadow 0.12s ease;
}
.input:focus { box-shadow: 4px 4px 0 var(--nb-coral); }
.checkbox { display: flex; align-items: center; gap: 10px; margin-top: 16px; font-size: 14px; }
.checkbox input { width: 18px; height: 18px; accent-color: #DA7C75; }
.privacy-text { font-size: 12px; opacity: 0.7; margin-top: 8px; line-height: 1.45; }
.privacy-text a { color: inherit; text-decoration-color: var(--nb-coral); text-decoration-thickness: 2px; }
.button {
  margin-top: 20px; width: 100%; padding: 14px;
  background: var(--nb-coral); color: #1A1A1A;
  border: 3px solid var(--nb-ink); border-radius: 0;
  box-shadow: 5px 5px 0 var(--nb-ink);
  font-family: var(--font-display); font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;
  cursor: pointer; transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.button:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 var(--nb-ink); }
.button:active { transform: translate(4px, 4px); box-shadow: 1px 1px 0 var(--nb-ink); }
</style>