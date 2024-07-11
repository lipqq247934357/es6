// 1） string number boolean
let age: number = 1;
let name: string = "11";
let isCool: boolean | undefined = true;

// 2）支持类型推导
let age2 = 2; // age2会被认为是number类型；

// 3）类型一般用小写，大写一般用来描述实例类型
let str1: String = "";

// 4）数组
let arr1: number[] = [1, 2];
let arr2: Array<number> = [1, 2];
let arr3: (string | number)[] = [1, 2, "3"];

// 5)元组 数组每个位置都有对应类型
let lipengPointComplex: [string, number] = ["1", 2];

// 6)枚举： 自带类型的对象  约定一组我们会用枚举 状态码 权限 数据格式 标志位
enum STATUS {
  "OK" = 1,
  "NO_OK" = 2,
  "NOT_FOUND" = 3
}

console.log(STATUS.OK);
// 类型可以反举 
console.log(STATUS[0]);

// 7)undefined,null
let unde: undefined = undefined;
let nul: null = null;

// 8) void 空类型
let noReturn = () => {};

// 9）never 不会有返回值
// 1.返回异常
function throwError(): never {
  throw Error();
}
// 2.死循环函数
function whileTree(): never {
  while(true) {}
}

// 10)any 适用任何类型
let lipeng: any = {};

// 11)对象
let person: { name: string; age: Number } = { age: 1, name: "lipeng" };
person.name = "lipengSuperBoy";

// 12)函数
let eat = (food: number, water: number): number => food + water;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b; 
// 函数返回值设置
const a = (): Number => {
  return 1;
};

// 13)symbol
let s1: Symbol = Symbol();
let s2: Symbol = Symbol();

// 返回一个export {} 这个文件就会被认为是一个模块，不会和全局的名字冲突；
export {};
