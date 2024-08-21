type TupleToString<T extends any[], S extends string = ""> = T extends [
  infer L,
  ...infer R
]
  ? L extends string | number | null | undefined | bigint | boolean
    ? TupleToString<R, `${S}${L}`>
    : never
  : S;

type A = TupleToString<["a", "b", "c"]>; // 'abc'
type B = TupleToString<["a"]>; // 'a'
type C = TupleToString<[]>; // ''
type D = TupleToString<[1, 2, 3]>; // ''
export {};
