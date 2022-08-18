import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/taiwind.css";
import "./assets/styles/global.css";

import { importLayoutComponent } from "./utils/import";

const app = createApp(App);
importLayoutComponent(app);
app.use(router);
app.mount("#app");
