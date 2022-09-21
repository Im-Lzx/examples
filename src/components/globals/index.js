// 异步组件加载
import { defineAsyncComponent } from "vue";
const globalCompsMap = import.meta.glob("./*.vue");

export default {
  install: function (Vue) {
    Object.keys(globalCompsMap).forEach((key) => {
      let name = String(/\.\/(\w+).vue/.exec(key)[1]);
      Vue.component(`global${name}`, defineAsyncComponent(globalCompsMap[key]));
    });
  },
};
