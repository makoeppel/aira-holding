// CSS
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/site.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from './plugins'

const app = createApp(App)

registerPlugins(app);

app.mount('#app')