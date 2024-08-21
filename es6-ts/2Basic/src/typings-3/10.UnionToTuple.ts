// (a:1) => any | (a:2) => any | (a:3)=>any

// type T1 = ((a: string) => 3) & ((a: number) => 2) & ((a: boolean) => 1);

// type P<T> = T extends (p: any) => infer R ? R : any; // 我门可以将一个联合类型 编程函数的交叉类型 在去一个个取出来放到数组中

// type ReturnVal = P<T1>;

// 1. 我门需要将 1｜ 2｜ 3 转换成函数的交叉类型， 将函数的参数包装成函数 ，采用推导的方式 获取参数的交集
type FineOne<T> = (T extends any ? (a: (p: T) => any) => any : never) extends (
  // (p:1)=>any | (p:2) => any | (p:3)=>any
  a: infer R // (p:1)=>any & (p:2) => any & (p:3)=>any
) => any
  ? R extends (a: infer R2) => any // 拿到 1 或者 2 或者 3
    ? R2
    : any
  : any;

type UnionToTuple<T, I = FineOne<T>> = [T] extends [never]
  ? []
  : [...UnionToTuple<Exclude<T, I>>, I]; // 每次拿到一个 放到数组中
type R = UnionToTuple<1 | 2 | 3>;

// type T1 = ((a: string) => 3) & ((a: number) => 2) & ((a: boolean) => 1);

// let x: T1 = (a: string | number | boolean): any => {
//   return 1;
// };

// function x(a: string): 1;
// function x(a: number): 2;
// function x(a: boolean): 3;
// function x(a: string | number | boolean): any {}

// type a = UnionToTuple<1 | 2 | 3>; // [1,2,3]
// type b = UnionToTuple<1 | string | boolean>;
// type c = UnionToTuple<any>;

// type Q1 = UnionToTuple<string | number | symbol>;
// type Q2 = UnionToTuple<string | number | symbol | boolean>;
// type Q3 = UnionToTuple<string | number | symbol | boolean | [boolean]>;

// 借助 函数的参数 联合类型 转换成交叉类型 推断参数， 参数再去做条件类型 默认返回其中的某一个类型
export {};

// > https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md
