/**
 * 类型兼容性
 * 就是一种类型可以作为另外一个类型的子类型，或者某种类型可以转换为另外一种类型
 *
 */

/**
 * 接口兼容性：
 *  参数少的兼容参数多的，源类型具有目标类型的全部属性就可以
 *
 */
interface X {
    a: any,
    b: any
}

interface Y {
    a: any,
    b: any,
    c: any
}

let x: X = {a: 1, b: 2};

let y: Y = {a: 1, b: 2, c: 3};

x = y;

// y = x; // 报错


/**
 * 函数兼容性
 *  函数作为参数的兼容性
 */

type Handler = (a: number, b: number) => void

function hof(handler: Handler) {
    return handler;
}

let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number,b:number,c:number) => {};
// hof(handler2); //报错

// 可选参数和剩余参数

/**
 * 参数兼容性
 */


/**
 * 返回值类型
 */

/**
 * 类的兼容
 */

/**
 *
 * 泛型的兼容性
 */


