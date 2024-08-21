// @ts-nocheck

// 1.是否到达了开头，到达了结尾  -> 结束
// 2.如果没有达到就累加即可 -》
// 3.达到了开头 就像结果集中存放 -》
type Slice<
  T extends any[],
  SIndex extends number, // 开始索引
  EIndex extends number = T["length"], // 结束索引
  SA extends any[] = [],
  EA extends any[] = [],
  F extends any[] = []
> = T extends [infer L, ...infer R]
  ? SA["length"] extends SIndex
    ? EA["length"] extends EIndex
      ? [...F, L]
      : Slice<R, SIndex, EIndex, SA, [...EA, null], [...F, L]>
    : Slice<R, SIndex, EIndex, [...SA, null], [...EA, null], F>
  : T;
type A1 = Slice<[any, never, 1, "2", true, boolean], 0, 2>; // [any,never,1]                    从第0个位置开始，保留到第2个位置的元素类型
type A2 = Slice<[any, never, 1, "2", true, boolean], 1, 3>; // [never,1,'2']                    从第1个位置开始，保留到第3个位置的元素类型
type A3 = Slice<[any, never, 1, "2", true, boolean], 1, 2>; // [never,1]                        从第1个位置开始，保留到第2个位置的元素类型
type A4 = Slice<[any, never, 1, "2", true, boolean], 2>; // [1,'2',true,boolean]             从第2个位置开始，保留后面所有元素类型
type A5 = Slice<[any], 2>; // []                               从第2个位置开始，保留后面所有元素类型
type A6 = Slice<[], 0>; // []

export {};
