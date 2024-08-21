// 自己实现一些常用类型

// 内置类型  基于条件的 Extract  Exclude
//          基于映射的  Partial Required Readonly等
//          结构的  Pick  Omit  Record
//          基于类型推断的  InstanceType  ReturnType  Paramters... infer(模式匹配类型)

type T1 = {
  name: string;
  age: number;
  address: string;
};

type T2 = {
  name: string;
  gender: number;
  address: number;
};

// 部分属性是可选的
type T3 = Partial<T1>;

// 去 T1中取出 值是string类型的

// 我期望去掉string类型
export {};
