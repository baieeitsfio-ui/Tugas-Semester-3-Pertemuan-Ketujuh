import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

// Mengaktifkan Pinia
app.use(createPinia());

// Mengaktifkan Vue Router
app.use(router);

// Menjalankan aplikasi
app.mount("#app");