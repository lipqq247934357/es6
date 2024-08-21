type LastItem<T extends any[]> = T extends [...infer L, infer R] ? R : never;
type A = LastItem<[string, number, boolean]>; // boolean
type B = LastItem<["B", "F", "E"]>; // 'E'
type C = LastItem<[]>; // never

// infer 默认如果只写一个 没有剩余运算符，只认为是第一个
// ...infer 尽可能的匹配
export {};
