function aa(val) {
    if (val === 0 || val === 1) { // 停止点
        return 1;
    }
    return val * aa(val - 1); // 调用自身
}

// console.log(aa(5));


function bb(num) {

    if (num < 0)
        return 0;
    if (num <= 2)
        return 1;
    return bb(num - 1) + bb(num - 2)
}

console.log(bb(8));

