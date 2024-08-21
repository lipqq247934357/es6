type FirstChar<T extends string> = T extends `${infer L}${infer R}` ? L : never;
type A = FirstChar<"BFE-qmn">; // 'B'
type B = FirstChar<"dev">; // 'd'
type C = FirstChar<"">; // never

// 默认直接infer肯定是全部的
// infer 没有特殊符号  只会拿到第一个字符  `${infer L}`
// 如果两个infer 最后面的就是 所有的
// 如果有符号分割，分左右， 没有默认左边的都是一个字符
export {};
