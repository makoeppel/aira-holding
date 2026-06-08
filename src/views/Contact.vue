<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" md="6">

        <div class="form-card">

          <h2 class="title">Newsletter</h2>
          <p class="subtitle">Send us a message or subscribe to our newsletter to learn more about our projects.</p>

          <form action="https://formspree.io/f/mwvjozjw" method="POST">

            <label class="label">Email</label>
            <input
              class="input"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />

            <label class="label">Message</label>
            <textarea
              class="textarea"
              name="message"
              placeholder="Your message..."
              rows="5"
            ></textarea>

            <label class="checkbox">
            <input type="checkbox" name="consent" required />
            I agree that my mail address is only used to send our newsletter.
            </label>

            <p class="privacy-text">
            I have read the <a href="#/imprint">privacy policy</a>. The mail address is collected via <a href="https://formspree.io"> Formspree</a>.
            You can revoke your consent at any time.
            </p>

            <button class="button" type="submit">
              Send message
            </button>

          </form>

        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Card */
.form-card {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px;
  color: #fff;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* Typography */
.title {
  font-size: 22px;
  margin-bottom: 6px;
}

.subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}

/* Labels */
.label {
  display: block;
  font-size: 13px;
  margin: 14px 0 6px;
  color: rgba(255, 255, 255, 0.8);
}

/* Inputs */
.input,
.textarea {
  width: 100%;
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 12px 14px;
  color: #fff;
  outline: none;
  transition: 0.2s ease;
  font-size: 14px;
}

.input:focus,
.textarea:focus {
  border-color: #4f9cff;
  box-shadow: 0 0 0 2px rgba(79, 156, 255, 0.2);
}

/* Checkbox */
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.privacy-text {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 8px;
  line-height: 1.4;
}

/* Button */
.button {
  margin-top: 18px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #4f9cff;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.button:hover {
  background: #3b82f6;
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
}
</style>