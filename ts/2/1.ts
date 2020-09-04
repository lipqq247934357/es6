/**
 * 类型推断
 *
 */

let a = 1; // 推断为number类型
let b = ''; // 推断为字符类型

let c = (x: number, y: number) => x + y; // 返回值类型为number类型

let d = [1, null]; // 推断为兼容number和null类型

// 通过事件推断类型
window.onkeyup = () => {
};

/**
 * 类型断言
 *  将对象强制转换成某种类型
 *
 */

interface Foo {
    bar: number
}

let foo: Foo = {} as Foo; // 类型断言


