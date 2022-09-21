export default {
  created(el, binding) {
    el.style.color = binding.value || "red";
  },
  updated(el, binding) {
    el.style.color = binding.value || "red";
  },
};
