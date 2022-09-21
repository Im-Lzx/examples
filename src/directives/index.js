import watermark from "./watermark";
import red from "./red";

export default {
  install: function (Vue) {
    Vue.directive("watermark", watermark);
    Vue.directive("red", red);
  },
};
