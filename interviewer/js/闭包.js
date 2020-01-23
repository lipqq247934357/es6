// 循环中使⽤闭包解决 `var` 定义函数的问题
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}

// 第一种：使用闭包函数
for (var i = 1; i <= 5; i++) {
    ; (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })(i)
}

// 第二种：使用setTimeout第三个参数为函数参数
for (var i = 1; i <= 5; i++) {
    setTimeout(
        function timer(j) {
            console.log(j)
        }, i * 1000, i)
}

// 第三种：使用let
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}