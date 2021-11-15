/**
 * 基本数据类型
 *
 */
// 1.1基本数据类型 - 使用拟人的描述
console.log("基本数据类型");

let age: number = 1;
let name: string = "11";
let isCool: boolean | undefined = true;

// 数组
let lipengPoint: number[] = [1, 2];
let lipengPoint2: Array<number> = [1, 2];

// 元组
let lipengPointComplex: [string, number] = ["1", 2];

// 函数
let eat = (food: number, water: number) => food + water;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;
// 函数返回值设置
const a = (): Number => {
  return 1;
};

// 对象
let person: { name: string, age: Number } = { age: 1, name: "lipeng" };
person.name = "lipengSuperBoy";

// symbol
let s1:Symbol = Symbol();
let s2:Symbol = Symbol();

// undefined,null
let unde: undefined = undefined;
let nul: null = null;

// void
let noReturn = () => {};

// any 适用任何类型
let lipeng: any= {};

// never 不会有返回值
// 1.返回异常
// 2.死循环函数
export default {};
