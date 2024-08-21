// 类型兼容性

// ts兼容性分为两种 子 extends 父  结构来考虑

const str: string = "abc";
// 结构考虑
let obj!: {toString(): string}
obj = str; // string也有toString方法

// 函数的兼容性
let fnWithTwoParams = (a: number, b: number) => {
  console.log(1 + 2);
};
let fnWithOneParam = (a: number) => {
  console.log(1);
};

// 错误：不能将参数多的函数赋值给参数少的函数
// fnWithOneParam = fnWithTwoParams; // TypeScript 报错
// 允许：可以将参数少的函数赋值给参数多的函数
fnWithTwoParams = fnWithOneParam; // TypeScript 允许
fnWithTwoParams(1, 2);
// 函数赋值中 多参数的函数不能赋值给少参数的函数
// 为了安全性
// 我传入不用可以，但我不能没传但用了

// 类的兼容性也一样 比较的是实例
class A {
  a = 1;
}
class B {
  a = 1;
}

const b:B = new A(); // 类中有private，protected则不能赋值

// 这种是可以赋值的，鸭子检测，就是长得像就行
type withType<T, K> = T & [K];
type BTC = withType<number, 'BTC'>;
type USDT = withType<number, 'USDT'>;

let c1: BTC = 100 as BTC;
let c2: USDT = 100 as USDT;

// c1 = c2;
// c2 = c1;

// 逆变和协变
// 父类和子类之间的兼容性，class在前端用的少，没怎么学  /Users/lipeng/资料/视频/TS体系课 30多分钟处可以学一学

// 

export {};
