import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'

const app = createApp(App)
const vuetify = createVuetify() // Replaces new Vuetify(...)

app.use(vuetify)

app.mount('#app');
