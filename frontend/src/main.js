import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import routes from './routes/index';
loadFonts()

createApp(App)
  .use(vuetify).use(routes)
  .mount('#app')
