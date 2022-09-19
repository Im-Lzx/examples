import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import page404 from "../views/404.vue";

/**
 * 生成路由map
 * @param {object} paths 路由路径关系
 * @return {array} 路由表
 */
function createRouterMaps(paths) {
  return Object.keys(paths).reduce((maps, cur) => {
    let fileName = /\.\.\/views\/(\w+)\.vue/.exec(cur)[1];
    // let pathName = String(fileName.slice(0, -4)).toLowerCase();

    maps.push({
      path: `/${fileName}`,
      name: fileName,
      component: paths[cur],
    });
    return maps;
  }, []);
}

// vue路由
const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index,
    },
    ...createRouterMaps(import.meta.glob("../views/**/*.vue")),

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

routers.afterEach((to, from, failure) => {
  console.log(failure);
});

export default routers;
