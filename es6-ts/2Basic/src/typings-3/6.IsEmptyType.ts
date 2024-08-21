type IsEmptyType<T> = keyof T extends never
  ? string extends T
    ? unknown extends T
      ? false
      : true
    : false // 对object做处理
  : false;

type A = IsEmptyType<string>; // false
type B = IsEmptyType<{ a: 3 }>; // false
type D = IsEmptyType<any>; // false
type F = IsEmptyType<Object>; // false
type G1 = IsEmptyType<never>; // false
type C = IsEmptyType<{}>; // true
type E = IsEmptyType<object>; // false
type G = IsEmptyType<unknown>; // false
export {};
