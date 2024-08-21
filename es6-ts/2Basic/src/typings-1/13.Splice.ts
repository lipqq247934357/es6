type Splice<
  T extends any[], // 传入的数组
  SIndex extends number, // 开始索引
  DCount extends number, // 要删除的个数
  I extends any[] = [], // 插入的内容
  SA extends any[] = [], // 记录是否到达开始索引
  DA extends any[] = [], // 记录是否达到删除的个数
  F extends any[] = [] // 结果集
> = T extends [infer L, ...infer R]
  ? SA["length"] extends SIndex
    ? DA["length"] extends DCount
      ? [...F, ...I, ...T]
      : Splice<R, SIndex, DCount, I, SA, [...DA, null], F>
    : Splice<R, SIndex, DCount, I, [...SA, null], DA, [...F, L]>
  : F;

type A1 = Splice<[string, number, boolean, null, undefined, never], 0, 2>; // [boolean,null,undefined,never]               从第0开始删除，删除2个元素
type A2 = Splice<[string, number, boolean, null, undefined, never], 1, 3>; // [string,undefined,never]                     从第1开始删除，删除3个元素
type A3 = Splice<
  [string, number, boolean, null, undefined, never],
  1,
  2,
  [1, 2, 3]
>;
export {};
