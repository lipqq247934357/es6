/**
 * 防抖：就是在最后一次执行代码
 *
 */

function debounce(fn, delay) {
    let timer = null;
    return function (...rest) {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, rest)
        }, delay)
    }
}

// let b = debounce(function (item) {
//     console.log(11111,item)
// },1000);
// b(1);

/**
 *
 * 节流：执行频率不能太高
 */

