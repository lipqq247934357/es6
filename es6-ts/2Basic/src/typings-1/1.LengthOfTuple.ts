// 可以通过索引来访问 一个对象、数组对应的值
type LengthOfTuple<T extends any[]> = T["length"];
type A = LengthOfTuple<["B", "F", "E"]>; // 3
type B = LengthOfTuple<[]>; // 0
export {};
