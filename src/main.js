import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import GlobalComps from "@/components/global/index.js";
import GlobalDirectives from "@/directives/index.js";
import "./styles/main.scss";

const app = createApp(App);

app.use(Router);
app.use(GlobalComps);
app.use(GlobalDirectives);

app.mount("#app");
