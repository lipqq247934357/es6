type LengthOfString<
  T extends string,
  A extends any[] = []
> = T extends `${infer L}${infer R}`
  ? LengthOfString<R, [...A, L]>
  : A["length"]; // 根据字符串转化元组，求长度

type A = LengthOfString<"BFE.dev">; // 7
type B = LengthOfString<"">; // 0

export {};

// @ts-check 告诉编辑器 采用ts 来校验语法
// @ts-nocheck 标识这个文件 不采用ts来校验了
// @ts-expect-error 期望下一行代码是出错的，但是没有错误 反而会报错
let a: string = 1;
// @ts-ignore 针对下一行不进行校验
