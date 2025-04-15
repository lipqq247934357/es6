// 函数中的类型 1）函数的声明方式 2）函数的参数 3）函数返回值

// ------------声明方式------------------

// 函数关键字声明的函数  不能标注函数的定义
function sum1(a: any, b: any) {
  return a + b;
}

// 变量方式声明  赋予的值要满足定义的类型
const sum2: (a: any, b: any) => any = function (a, b) {
  return a + b;
};

// 声明类型赋值类型
type Isum = (a: any, b: any) => any;
const sum3: Isum = function (a, b) {
  return a + b;
};
// ------------参数------------------

// 可选参数
type IsumP = (a: any, b?: any) => any;
const sumP1: IsumP = function (a, b) {
  return a + b;
};

// this
// 尽量不用this作为函数的上下文，this的缺陷是推导问题
// 不明确的this，就把对象传进去，this就指代这个对象，而不是直接使用this
function getValue(this: IPerson, key: IKeys) {
  return this[key];
}
const person = { name: "lipeng", age: 23 };
getValue.call(person, "name");

// 返回对象的类型
type IPerson = typeof person;
// 返回对象的key组成的数组
type IKeys = keyof IPerson;

// 函数中有arguments，但不建议使用,可以使用...获取值

function sum(...args: [number]): number {
  return args.reduce((memo, current) => memo + current);
}

// 函数重载声明 
function toArray(value: string): string[];
function toArray(value: number): number[];
// 函数重载实现
function toArray(value: number | string): string[] | number[] {
  return [];
}

let arr1 = toArray("12");
let arr2 = toArray(12);

export {};