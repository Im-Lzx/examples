function start(el, binding) {
  const type = typeof binding.value;
  if (type == "object") {
    createWatermak(el, binding.value);
  } else {
    createWatermak(el, { value: binding.value || "水印" });
  }
}

/**
 * 创建水印背景图
 * @param {object}	el	目标元素
 * @param {object}	binding	目标元素属性值
 */
function createWatermak(el, binding) {
  const {
    value = "水印",
    rotate = -14,
    color = "rgba(144,147,153,0.1)",
  } = binding;

  const canvasElement = document.createElement("canvas");

  canvasElement.width = 200;
  canvasElement.height = 150;
  canvasElement.style.display = "none";

  const ctx = canvasElement.getContext("2d");
  // 弧度偏转
  ctx.rotate((rotate * Math.PI) / 180);
  ctx.font = "46px PingFang SC";
  ctx.fontWeight = "400";
  ctx.fontFamily =
    "-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Roboto,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol!important;";
  ctx.fillStyle = color;
  ctx.fillText(value, 70, 130);

  el.style.backgroundImage =
    "url(" + canvasElement.toDataURL("image/png") + ")";
  el.style.backgroundPosition = "420px 420px,0px 0px";
  el.style.pointerEvents = "none";
}

export default {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding) {
    start(el, binding);
  },
  updated(el, binding) {
    start(el, binding);
  },
};
