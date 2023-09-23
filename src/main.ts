// CSS
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify'
import { i18n } from '@/lang'
import pinia from './plugins/pinia'

const app = createApp(App)
    .use(router)
    .use(vuetify)
    .use(i18n)
    .use(pinia);

app.mount('#app')