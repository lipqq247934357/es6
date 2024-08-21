type IsAny<T> = unknown extends T
  ? [T] extends [string]
    ? true
    : false
  : false;

type A = IsAny<string>; // false
type B = IsAny<any>; // true
type C = IsAny<unknown>; // false
type D = IsAny<never>; // false

export {};

// any 可以赋予给 unknown, 赋予给任何类型
let b: any = "asd";
let a: string = b;

// unknown 可以赋予给any 或着 unknown

// 类型的赋予问题
