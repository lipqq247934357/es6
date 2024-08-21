// 除了基于条件类型之外，还有基于对象的类型

type A1 = { name: string };
type A2 = { age: number };

type Compute<T> = {
  [K in keyof T]: T[K]; // 映射
};

// 取出对象的所有属性组成的集合
type A1A2 = Compute<A1 & A2>;

type PartialCompany = Partial<Company>;

// 内置类型中对对象属性进行修饰操作
interface Company {
  num: number;
  name: string;
}

interface Person<T = any> {
  name: string;
  age: number;
  company: T;
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type withCompany = DeepPartial<Person<Company>>;

type a = Partial<Person<Company>>;

let person: withCompany = {
  company: {},
};

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
// Pick 挑选某些属性  Omit 去掉某些属性   对象类型的操作
type pickPerson = Pick<Person, "name" | "age">;

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type omitPerson = Omit<Person<Company>, "name" | "age">;

// Record
let obj: Record<string, any> = { name: "name", age: 23 };

function map<K extends string, V, R>(
  obj: Record<K, V>,
  callback: (item: V, key: K) => R
) {
  let result = {} as Record<K, R>;
  for (let key in obj) {
    result[key] = callback(obj[key], key);
  }
  return result;
}

map(obj, (item, key) => {
  return item;
});

export {};
