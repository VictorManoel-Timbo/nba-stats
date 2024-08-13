import '@/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Nora from '@primevue/themes/nora'
import Lara from '@primevue/themes/lara'
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Nora,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});

app.component("Button", Button)
app.component("Card", Card)
app.component("InputText", InputText)

app.use(router)

app.mount('#app')
