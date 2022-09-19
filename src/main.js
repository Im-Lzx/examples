import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import GlobalComps from "@/components/globals/index.js";
import "./assets/main.css";

const app = createApp(App);

app.use(Router);

app.use(GlobalComps);

app.mount("#app");
