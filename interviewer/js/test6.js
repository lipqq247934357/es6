/**
 * 防抖：就是在最后一次执行代码
 *
 * 节流：执行频率不能太高
 */
function debounce(fn, delay) {
    var timer = null;
    return function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(function () {
            fn.call(_this, rest);
        }, delay);
    };
}
var b = debounce(function (item) {
    console.log(11111, item);
}, 1000);
b(1,2,3,4);
