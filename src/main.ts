import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

//theme
import "primevue/resources/themes/soho-dark/theme.css";     

//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
