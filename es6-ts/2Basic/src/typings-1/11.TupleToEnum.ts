import { FindIndex, isEqual } from "./10.FindIndex";
type TupleToEnum<T extends any[], I = false> = {
  // 循环元组的每一项， 之后判断是否需要索引，找出来对应的索引，否则直接显示key
  readonly [K in T[number]]: isEqual<I, true, FindIndex<T, K>, K>;
};
// 默认情况下，枚举对象中的值就是元素中某个类型的字面量类型
type a1 = TupleToEnum<["MacOS", "Windows", "Linux"]>;
// -> { readonly MacOS: "MacOS", readonly Windows: "Windows", readonly Linux: "Linux" }

// 如果传递了第二个参数为true，则枚举对象中值的类型就是元素类型中某个元素在元组中的index索引，也就是数字字面量类型
type a2 = TupleToEnum<["MacOS", "Windows", "Linux"], true>;
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
export {};
