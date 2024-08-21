type Filter<T extends any[], K, F extends any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? // 如果条件满足 就放到结果集中，不满足就直接返回即可
    Filter<R, K, [L] extends [K] ? [...F, L] : F>
  : F;

type A = Filter<[1, "BFE", 2, true, "dev"], number>; // [1, 2]
type B = Filter<[1, "BFE", 2, true, "dev"], string>; // ['BFE', 'dev']
type C = Filter<[1, "BFE", 2, any, "dev"], string>; // ['BFE', any, 'dev']

export {};
