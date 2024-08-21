// 判断条件 什么时候等于3 / 2  构建元组（实现循环）

type Repeat<T, I, F extends any[] = []> = I extends F["length"]
  ? F
  : Repeat<T, I, [...F, T]>;
type A = Repeat<number, 3>; // [number, number, number]
type B = Repeat<string, 2>; // [string, string]
type C = Repeat<1, 1>; // [1]
type D = Repeat<0, 0>; // []

export {};
