// 参数的解构
function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

console.log(add(2, 5, 3)); // 10