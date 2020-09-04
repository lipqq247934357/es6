/**
 *
 * 定义函数的4种方法
 * */

function add1(x: number, y: number): number {
    return x + y;
}

let add2: (x: number, y: number) => number;

type add3 = (x: number, y: number) => number;

interface add4 {
    (x: number, y: number): number
}

add(1, 2);

function add5(x: number, y?: number): number {
    return y ? x + y : x
}

add5(1);

function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}

add7(1, 2, 34, 5, 6, 7);

// 函数重载
