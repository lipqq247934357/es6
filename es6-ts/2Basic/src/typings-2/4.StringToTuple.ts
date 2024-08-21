type StringToTuple<
  T extends string,
  F extends any[] = []

  // 一个字符 可以看成 'x' + ''
> = T extends `${infer L}${infer R}` ? StringToTuple<R, [...F, L]> : F;

type A = StringToTuple<"BFE.dev">; // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<"a">; // []
export {};
