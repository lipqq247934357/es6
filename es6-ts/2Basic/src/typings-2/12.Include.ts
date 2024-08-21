// @ts-nocheck

// Jiang  J  我要判断一个字符串中有没有这个字符

// 11J222 extends  ${infer L}J${infer R}

type Include<T extends string, C extends string> = T extends ""
  ? C extends ""
    ? true
    : false
  : T extends `${infer L}${C}${infer R}`
  ? true
  : false;

// 对一些特殊情况 还是需要提前处理的

type a1 = Include<"Jiang", "J">; // true
type a2 = Include<"Jiang", "i">; // true
type a3 = Include<"", "">; // true 空字符串时需要特殊处理
type a4 = Include<"", "a">;
export {};
