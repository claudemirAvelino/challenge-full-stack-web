import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import routes from './routes/index';
import Maska from 'maska'
import { createPinia } from 'pinia'

loadFonts()

createApp(App).
    use(vuetify).use(routes).use(Maska).use(createPinia())
  .mount('#app')
