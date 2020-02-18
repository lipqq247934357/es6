// js函数作用域
var values1 = 0;
var values2 = 0;
var values3 = 0;

for (var i = 1; i <= 3; i++) {
    var i2 = i;
    (function () {
        var i3 = i;
        setTimeout(function () {
            values1 += i;
            values2 += i2;
            values3 += i3;
        });
    })()
}

setTimeout(function () {
    console.log(`${values1},${values2},${values3}`)
}, 100)



//冒泡排序   1.首先是让相邻的项进行比较，每次比较最后一个肯定是最大或者最小值，然后比较剩下的数字，将第二小或者第二大的放到倒数第二位置
(function (arr) {
    let len = arr.length;
    let i = len - 1;
    while (i > 0) {
        for (let j = 0; j < i; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
        i--;
    }
    console.log(arr)
})([1, 3, 5, 22, 6, 7, 33, 7777]);

// 获取10-100之间不重复的10个数字
(function () {
    let arr = [];
    while (arr.length !== 10) {
        let values = parseInt(Math.random() * 90 + 10);
        if (arr.indexOf(values) === -1) {
            arr.push(values);
        }
    }
    console.log('10个非重复数字：' + arr)
})();


(function () {
    let arr = [1, 2, 3];
    let arr2 = [4, 5, 6];
    console.log(`合并之后的数组：${arr.concat(arr2)}`);
}());


// 函数柯里化的应用 add(1)(2)(3)

(function () {
    // 实现 add(1)(2)(3) = 6
    function add(...arg) {
        let sum = arg.reduce(function (a, b) {
            return a + b;
        });
        let tmp = function (...args) {
            sum = sum + args.reduce(function (a, b) {
                return a + b;
            });
            return tmp;
        };
        tmp.toString = function () {
            return sum;
        };
        return tmp;
    }

    console.log(add(1, 2)(2)(3, 6))
}());


// 数组乱序
(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr.sort(function () {
        return Math.random() - 0.5;
    });
}
());


// 将多维数组转化为一维数组  有好多种方法，这个我觉得挺好的
var arr = [1, [2, [[3, 4], 5], 6]];

function parse(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr2.push.apply(arr2, parse(arr[i]));
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(parse(arr));


/**
 * 解析 url 同时返回一个方法，如果找不到这个字符串，返回undefined，如果是一个，返回true，有多个返回数组
 * @param url
 */
function urlParse(url) {
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
        arr.forEach(function (item) {
            item = item.substring(1).split('=');
            let key = decodeURIComponent(item[0]);
            let value = decodeURIComponent(item[1]);
            if (!obj[key]) {
                obj[key] = value;
            } else {
                if (Array.isArray(obj[key])) {
                    obj[key].push(value);
                } else {
                    obj[key] = [obj[key], value];
                }
            }
        });
    }
    return function (key) {
        return obj[key];
    }
}

var getPara = urlParse('https://twotiger.com/aa?name=100&age=200&aa=300&aa=400&aa=500');
console.log(getPara('name'));
console.log(getPara('aa'));
console.log(getPara('bb'));

