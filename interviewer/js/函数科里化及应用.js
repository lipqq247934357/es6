// 1.最简单的函数柯里化

// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3

// 2.扩展

// 3.经典面试题 参见算法模块
