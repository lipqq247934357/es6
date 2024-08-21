type UnionToIntersection<T> = (T extends any ? (a: T) => any : any) extends (
  a: infer R
) => any
  ? R
  : any;

type A = UnionToIntersection<{ a: string } | { b: string } | { c: string }>;

// {a:string} {b:string} {c:string} 肯定是 { a: string } & { b: string } & { c: string } 父类型

// 函数参数 是逆变的， 给一个函数赋予值的时候 ，可以传递父亲，返回值可以是儿子

// type X =
//   | ((a: { a: string }) => 1)
//   | ((b: { b: string }) => 1)
//   | ((c: { c: string }) => 1);

// let x: X = (a: { a: number; b: string; c: string }) => 1;

// // 借助函数的特点
// x({ c: "12" }); // 传的是父亲

// type T1 = { name: string };
// type T2 = { age: string };

// type ToIntersection<T> = T extends [(x1: infer X) => any, (x1: infer X) => any]
//   ? X
//   : any;
// type Inter = ToIntersection<[(x1: T1) => any, (x2: T2) => any]>;

export {};
