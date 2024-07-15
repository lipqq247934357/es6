// 条件类型 if/else 三元运算符

type StatusCode<T> = T extends 200 | 300 | 400 ? "success" : "fail";

type IReturnMessage = StatusCode<300>;

// 类型级别 1）根据结构的角度分析  2) 从类型角度来进行分析

type IObj<T> = T extends { name: "jw" } ? "ok" : "no";

type IPerson = IObj<{ name: "jw"; age: 23 }>;

type IPerson1 = IObj<{}>;

// 类型角度

// TODO: 类型的extends关系   /Users/lipeng/资料/视频/TS体系课/8内置类型 的15min
// never是任何类型的子类型  字面量类型  基础类型  包装类型  any unknown
// 不用记住，用的多了就了解了

type T1 = never extends "str" ? true : false;
type T2 = "str" extends string ? true : false;
type T3 = string extends String ? true : false;
type T4 = String extends Object ? true : false;

type T5 = string extends any ? true : false;
type T6 = string extends unknown ? true : false;

type T7 = any extends unknown ? true : false;
type T8 = unknown extends any ? true : false;

type T9 = any extends 1 ? true : false;
type T10 = never extends 1 ? true : false;

// 分发导致的问题：
/**
 * 什么时候会分发
 * 1.联合类型通过泛型传递    Example<string | number> 是联合类型
 * 2.而且比较的时候会产生分发   T extends string ? string[] : number[];  这个就是比较语句
 * 3.类型需要是裸类型（裸类型就是泛型，就自己，没和别人搭配）
 */

type Example<T> = T extends string ? string[] : number[];

// 拿每个类型进行判断，然后获取结果，组成新的返回类型
type Test3 = Example<string | number>; // Test3 的类型是 string[] | number[]

type UnionAssets<T, K> = T extends K ? true : false;

type U1 = UnionAssets<1 | 2, 1 | 2 | 3>;
type U2 = UnionAssets<1 | 2 | 3, 1 | 2>;

// 可以通过某种途径阻断分发机制

// 在 extends之前增加  T & {}

type formatResult<T> = T extends string ? string : number;
function add<T extends string | number>(a: T, b: T): formatResult<T> {
  return a + (b as any);
}
let r = add(1, 2);
r = r + 3;

// 子类型 父类型

// 内置类型中很多类型是基于条件类型的

// type Extract<T, U> = T extends U ? T : never;
type ExtractRes = Extract<1 | 2 | 3 | 4, 1 | 2>;

type ExtractRes2 = Exclude<1 | 2 | 3 | 4, 1 | 2>;

 const ele = document.getElementById("app");
 type Ele = NonNullable<typeof ele>;


export {};
