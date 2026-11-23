<script lang="ts" setup>
    withDefaults(defineProps<{ title?: string, subtitle?: string }>(), {
        title: "Let's work together",
        subtitle: 'Tell us about your facility or project, or subscribe to our newsletter to follow our work.'
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
        <h2 class="text-h5 font-weight-bold mb-1">
          {{ title }}
        </h2>
        <p class="aira-muted text-body-2 mb-4">
          {{ subtitle }}
        </p>

        <form
          action="https://formspree.io/f/mwvjozjw"
          method="POST"
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
          />

          <label class="checkbox">
            <input
              type="checkbox"
              name="consent"
              required
            >
            <span>I agree that my email address is used to answer my message and to send the newsletter.</span>
          </label>

          <p class="privacy-text">
            I have read the <a href="#/imprint">privacy policy</a>. The email address is collected via
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener"
            >Formspree</a>. You can revoke your consent at any time.
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
.contact-card { padding: 28px; }
.label { display: block; font-size: 13px; margin: 14px 0 6px; opacity: 0.8; }
.input {
  width: 100%;
  background: rgba(var(--v-theme-on-surface), 0.04);
  border: 1px solid rgba(var(--v-theme-on-surface), 0.14);
  border-radius: 10px;
  padding: 12px 14px;
  color: inherit;
  outline: none;
  transition: 0.2s ease;
  font-size: 14px;
  font-family: inherit;
}
.input:focus { border-color: #4f9cff; box-shadow: 0 0 0 2px rgba(79, 156, 255, 0.2); }
.checkbox { display: flex; align-items: center; gap: 10px; margin-top: 14px; font-size: 13px; opacity: 0.8; }
.privacy-text { font-size: 12px; opacity: 0.6; margin-top: 8px; line-height: 1.4; }
.privacy-text a { color: #4f9cff; }
.button {
  margin-top: 18px; width: 100%; padding: 12px; border: none; border-radius: 10px;
  background: #4f9cff; color: white; font-weight: 600; cursor: pointer; transition: 0.2s ease;
}
.button:hover { background: #3b82f6; transform: translateY(-1px); }
</style>
