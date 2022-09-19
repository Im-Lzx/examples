const globalCompsMap = import.meta.glob("./*.vue");
const globalComps = Object.keys(globalCompsMap).reduce((total, ele) => {
  let name = String(/\.\/(\w+).vue/.exec(ele)[1]).toLowerCase();
  total[`global-${name}`] = globalCompsMap[ele];

  return total;
}, {});
console.log(globalComps);

// import Title from "./Title.vue";

export default {
  install: function (Vue) {
    Object.keys(globalComps).forEach((key) => {
      Vue.component(key, globalComps[key]);
    });
  },
};
