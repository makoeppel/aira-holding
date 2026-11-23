// CSS
import '@mdi/font/css/materialdesignicons.css'
import '@fontsource/archivo-black/400.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import '@/assets/css/site.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from './plugins'

const app = createApp(App)

registerPlugins(app);

app.mount('#app')