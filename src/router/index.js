import { createRouter, createWebHistory } from "vue-router";
import { createRouterMaps } from "./helper.js";
import index from "@/pages/index.vue";
import page404 from "@/pages/404.vue";

const extendRouters = createRouterMaps(import.meta.glob("@/pages/**/*.vue"));

// vue路由
const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index,
    },

    ...extendRouters,

    {
      path: "/404",
      name: "404",
      component: page404,
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ],
});

// 路由前置拦截
routers.beforeEach((to, from, next) => {
  //   console.log(to, from);

  next();
});

// 路由后置拦截
// routers.afterEach((to, from, failure) => {});

export default routers;
