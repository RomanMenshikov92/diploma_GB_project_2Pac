import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/router";
import pinia from "./stores/store";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
