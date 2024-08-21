export type isEqual<T, K, S, F> = [T] extends [K]
  ? [K] extends [T]
    ? keyof K extends keyof T
      ? keyof T extends keyof K
        ? S
        : F
      : F
    : F
  : F;

// ts 的检测 2个纬度 子 可以 赋予给父   ｜  结构

export type FindIndex<T extends any[], I, F extends any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? // 如果相同就返回索引，如果不相同，给结果集随便添加一项，撑开长度，如果满足，返回数组的长度
    isEqual<L, I, F["length"], FindIndex<R, I, [...F, null]>>
  : never;

// 1.去元组中查找 匹配的值 （相同）
type a1 = [any, never, 1, "2", true];
type a2 = FindIndex<a1, 1>; // 2
type a3 = FindIndex<a1, 3>; // never
export {};
