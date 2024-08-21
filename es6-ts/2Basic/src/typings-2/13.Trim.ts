type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T;
type TrimRight<T extends string> = T extends `${infer L} ` ? TrimRight<L> : T;
type Trim<T extends string> = TrimRight<TrimLeft<T>>;
type a1 = Trim<"   .jiang  ">;
export {};
