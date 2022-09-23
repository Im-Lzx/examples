const utils = {
  // 函数防抖 防止多次触发
  throttle(fn, gapTime) {
    if (gapTime == null || gapTime == undefined) {
      gapTime = 1500;
    }
    let _lastTime = null;
    // 返回新的函数
    return function () {
      let _nowTime = +new Date();
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
        fn.apply(this, arguments); //将this和传递给原函数
        _lastTime = _nowTime;
      }
    };
  },
  // 函数节流  多用于输入框输入时
  debounce(fn, interval) {
    var timer;
    var gapTime = interval || 1000; //间隔时间，如果interval不传，则默认1000ms
    return function () {
      clearTimeout(timer);
      var context = this;
      var args = arguments; //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
      timer = setTimeout(function () {
        fn.call(context, args);
      }, gapTime);
    };
  },
};

const _this = {
  con: utils.debounce(function (i) {
    console.log(i);
  }, 1500),
};

for (let i = 0; i < 10; i++) {
  _this.con(i);
}
