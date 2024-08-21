type FirstItem<T extends any[]> = T[0];
// 元组自带索引和长度 可以直接用索引和长度
type A = FirstItem<[string, number, boolean]>; // string
type B = FirstItem<["B", "F", "E"]>; // 'B'
type C = FirstItem<[]>; // 'B'
export {};
