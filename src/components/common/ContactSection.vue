<script lang="ts" setup>
import { reactive, ref } from 'vue'

withDefaults(defineProps<{ title?: string, subtitle?: string }>(), {
  title: "Let's work together",
  subtitle: 'Tell us about your facility or project.'
})

const contactEndpoint = import.meta.env.VITE_CONTACT_URL || 'https://contact.aira-holding.de/f/contact'

const form = reactive({
  name: '',
  email: '',
  message: '',
  _gotcha: ''
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const feedback = ref('')

async function handleSubmit() {
  status.value = 'sending'
  feedback.value = ''

  try {
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('message', form.message)
    formData.append('_gotcha', form._gotcha)

    const response = await fetch(contactEndpoint, {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.detail || 'Something went wrong.')
    }

    status.value = 'success'
    feedback.value = data.message || 'Thank you! Your message has been sent.'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err: any) {
    status.value = 'error'
    feedback.value = err.message || 'Failed to send message.'
  }
}
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

        <form @submit.prevent="handleSubmit">
          <input
            v-model="form._gotcha"
            type="text"
            name="_gotcha"
            style="display: none"
            tabindex="-1"
            autocomplete="off"
          >

          <label class="label">Name</label>
          <input
            v-model="form.name"
            class="input"
            type="text"
            name="name"
            placeholder="Your name"
            required
          >

          <label class="label">Email</label>
          <input
            v-model="form.email"
            class="input"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          >

          <label class="label">Message</label>
          <textarea
            v-model="form.message"
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
            :disabled="status === 'sending'"
          >
            {{ status === 'sending' ? 'Sending...' : 'Send message' }}
          </button>

          <p
            v-if="feedback"
            class="status-msg"
            :class="status"
          >
            {{ feedback }}
          </p>
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
.button:hover:not(:disabled) { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 var(--nb-ink); }
.button:active:not(:disabled) { transform: translate(4px, 4px); box-shadow: 1px 1px 0 var(--nb-ink); }
.button:disabled { opacity: 0.6; cursor: not-allowed; }
.status-msg { margin-top: 14px; font-size: 14px; font-weight: 600; }
.status-msg.success { color: #2e7d32; }
.status-msg.error { color: #c62828; }
</style>