type LastChar<T extends string, F = never> = T extends `${infer L}${infer R}`
  ? LastChar<R, L>
  : F; // 不停的移除第一个，直到只有一个自负，或者没有字符位置， 用上一次的结果作为返回值
type A = LastChar<"BFE">; // 'E' .    E
type B = LastChar<"dev">; // 'v'
type C = LastChar<"a">; // "a"
type D = LastChar<"">; // never
export {};
