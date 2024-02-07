import { createApp } from "vue";
import { createPinia, Pinia } from "pinia";
import App from "@/App.vue";

const pinia: Pinia = createPinia();
const app = createApp(App);
app.use(pinia);

export default pinia;
