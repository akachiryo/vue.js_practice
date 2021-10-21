import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from './LikeNumber.vue'

const app = Vue.createApp({})
app.component('LikeNumber', LikeNumber);

createApp(App).mount('#app')
