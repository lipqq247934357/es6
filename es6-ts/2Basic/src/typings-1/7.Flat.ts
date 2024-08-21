type Flat<T extends any[]> = T extends [infer L, ...infer R]
  ? // 每次判断一下左边的是不是数组 就拍平放到结果及中，将右边的每次拿出一个继续拍平
    [...(L extends any[] ? Flat<L> : [L]), ...Flat<R>]
  : T;
type A = Flat<[1, 2, 3]>; // [1,2,3]
type B = Flat<[[[[[[[1]]]]]], [2, 3], [4, [5, [6]]]]>; // [1,2,3,4,5,6]
type C = Flat<[]>; // []
type D = Flat<[1]>; // [1]

export {};
