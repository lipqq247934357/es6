/**
 * 类型推断
 *  1.你不写类型，ts根据赋值的类型确定字段类型；
 *  2.根据原生事件，推断是什么事件类型
 */

let a = 1; // 推断为number类型
let b = ""; // 推断为字符类型
let c = (x: number, y: number) => x + y; // 返回值类型推断为number类型
let d = [1, null]; // 推断为兼容number和null类型

// 通过事件推断类型
window.onkeyup = (event) => {};

/**
 * 类型断言
 *  将对象强制转换成某种类型
 *
 */

interface Foo {
  bar: number;
}

let foo: Foo = {} as Foo; // 类型断言

/**
 * 类型兼容性
 * 就是一种类型可以作为另外一个类型的子类型，或者某种类型可以转换为另外一种类型
 */

/**
 * 接口兼容性：
 *  参数少的兼容参数多的，源类型具有目标类型的全部属性就可以
 *
 */
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 2 };

let y: Y = { a: 1, b: 2, c: 3 };

x = y;

// y = x; // 报错

/**
 * 函数兼容性
 *
 * 函数作为参数的兼容性
 *  1.参数数量判断
 *      1.js中省略参数是很常见的操作，所以允许参数少的赋值给参数多的
 *      2.如果声明的必须参数没有传，这是不允许的
 *      少的能赋值给多的，多的不能赋值给少的，可以少，不能多
 *  2.参数类型兼容性
 *      1.参数兼容类似接口兼容，可以多，不能少
 */

/**
 *
 *  1.参数个数判断
 */

type Handler = (a: number, b: number) => void;

function hof(handler: Handler) {
  return handler;
}

let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2); //报错

// 可选参数和剩余参数

let func1 = (p1: number, p2: number) => {};
let func2 = (p1?: number, p2?: number) => {};
let func3 = (...rest: number[]) => {};

func1 = func2;
func1 = func3;
// func2 = func3; 不兼容，因为参数个数可能少于目标函数参数
// func2 = func1; 不兼容，因为参数个数可能少于目标函数参数
func3 = func1;
func3 = func2;

/**
 * 参数兼容性
 */

interface Print2D {
  x: number;
  y: number;
}
interface Print3D {
  x: number;
  y: number;
  z: number;
}

let p2d: Print2D = { x: 1, y: 2 };
let p3d: Print3D = { x: 1, y: 2, z: 3 };

p2d = p3d;
// p3d = p2d;

/**
 * 返回值类型
 */
let returnFunc1 = () => ({ name: "Alice" });
let returnFunc2 = () => ({ name: "Alice", location: "Singapore" });

returnFunc1 = returnFunc2;
// returnFunc2 = returnFunc1; // 因为returnFunc1没有location参数

/**
 *
 * 枚举类型兼容性
 *
 */

enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Green,
}

let status = Fruit.Apple;
// status = Color.Green; // 不同枚举类型之间是不兼容的

/**
 * 类的兼容
 * 构造函数和static属性是不做比较的
 *
 */

class A {
  constructor(p: number, q: number) {}
  id: number = 1;
}

class B {
  static s = 1;
  constructor(p: number, q: number) {}
  id: number = 1;
}

/**
 *
 * 泛型的兼容性
 */

interface Empty<T> {}

let obj1: Empty<string> = {};
let obj2: Empty<number> = {};
obj1 = obj2; // T被使用的时候才影响参数的使用

/**
 * 类型保护
 * 创建一个区块，在这个区块中保证变量属于某个类型
 */

enum Type {
  Strong,
  Weak,
}

class Java {
  helloJava() {
    console.log("hello Java");
  }
  java: any;
}

class JavaScript {
  helloJS() {
    console.log("hello JS");
  }
  js: any;
}
function getLanguageX(type: Type) {
  let language = type === Type.Strong ? new Java() : new JavaScript();

  if (type === Type.Strong) {
    (language as Java).helloJava();
  } else {
    (language as JavaScript).helloJS();
  }
}

function getLanguage(type: Type) {
  let language = type === Type.Strong ? new Java() : new JavaScript();

  // instanceof
  if (language instanceof Java) {
    console.log(language.helloJava());
  }
  // in
  if ("java" in language) {
    console.log(language.helloJava());
  }
  // typeof 通过不同类型具有的参数区分不同的类型
  let a;
  if (typeof a === "string") {
    console.log(a);
  } else if (typeof a === "number") {
    a = a + 1;
  }

  // 类型保护函数
}

export default {};
