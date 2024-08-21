// @ts-nocheck
// 字符串的length 属性 类型是number
// 元组是长度固定的 取出的lenght是常量
// type x = ["a", "b", "c"]["length"];

type RepeatString<
  T extends string,
  C extends number,
  A extends any[] = [],
  S extends string = ""
> = A["length"] extends C ? S : RepeatString<T, C, [...A, null], `${S}${T}`>;

type A = RepeatString<"a", 3>; // 'aaa'
type B = RepeatString<"a", 0>; // ''

export {};
