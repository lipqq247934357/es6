/**
 *
 * 节流
 * 考虑一个场景，滚动事件中会发起网络请求，但是我们并不希望用户在滚动过程中一直发起请求，而是隔一段时间发起一次，对于这种情况我们就可以使用节流。
 * 思路：
 *  使用闭包保存一个时间，每次点击判断这个时间是否大于上次保存的时间，如果大于的话更新事件并且执行函数
 */
// func是用户传入需要防抖的函数
// wait是等待时间
var throttle = function (func, wait) {
    if (wait === void 0) { wait = 50; }
    // 上一次执行该函数的时间
    var lastTime = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 当前时间
        var now = +new Date();
        // 将当前时间和上一次执行函数时间对比
        // 如果差值大于设置的等待时间就执行函数
        if (now - lastTime > wait) {
            lastTime = now;
            func.apply(this, args);
        }
    };
};
setInterval(throttle(function () {
    console.log(1);
}, 500), 1);
/**
 *
 * 防抖
 * 考虑一个场景，有一个按钮点击会触发网络请求，但是我们并不希望每次点击都发起网络请求，而是当用户点击按钮一段时间后没有再次点击的情况才去发起网络请求，对于这种情况我们就可以使用防抖。
 */
// func是用户传入需要防抖的函数
// wait是等待时间
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 50; }
    // 缓存一个定时器id
    var timer = 0;
    // 这里返回的函数是每次用户实际调用的防抖函数
    // 如果已经设定过定时器了就清空上一次的定时器
    // 开始一个新的定时器，延迟执行用户传入的方法
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(_this, args);
        }, wait);
    };
};
