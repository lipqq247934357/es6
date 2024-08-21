// 1.截取出 - 前面的 和后面的第一个字符

// handle  - o(下次循环的)  T extends `${infer L}-${infer R2}${infer R1}`

export type CamelCase<
  T extends string,
  F extends string = ""
> = T extends `${infer L}-${infer R2}${infer R1}`
  ? CamelCase<R1, `${F}${L}${Capitalize<R2>}`>
  : Capitalize<`${F}${T}`>;
type a1 = CamelCase<"handle-open-flag">; // HandleOpenFlag
type a2 = CamelCase<"open-flag">; // OpenFlag
export {};
