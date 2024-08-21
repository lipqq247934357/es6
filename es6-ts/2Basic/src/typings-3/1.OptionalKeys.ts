export type OptionalKeys<T extends object, K = keyof T> = K extends keyof T
  ? Omit<T, K> extends T
    ? K
    : never
  : any;

type a2 = OptionalKeys<{ foo: number; bar?: string }>; // bar
type a3 = OptionalKeys<{ foo: number; flag: boolean }>; // never
type a4 = OptionalKeys<{ foo?: number; flag?: boolean }>; // foo|flag
type a5 = OptionalKeys<{}>; // never

// 数组 、 字符串 、 对象

// 找属性是否是可选属性, 根据可选的特点，如果这个值忽略后 还可以付给以前的内容 则说明是可选的

// type T1 = { foo: number; bar?: string };
// let x1: T1 = {
//   foo: 123,
// };

// const x2: Omit<T1, "bar"> = {
//   foo: 123,
// };

// x1 = x2;
export {};
