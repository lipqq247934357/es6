// 除了基于条件类型之外，还有基于对象的类型

interface Person1 {
  handsome: string;
}

interface Person2 {
  high: string;
}

interface ICompany {
  name: string;
  age: number;
  address: string;
}

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
type PartialCompany = Partial<ICompany>;

// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };
type RequiredCompany = Required<PartialCompany>;

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };
type ReadonlyCompany = Readonly<RequiredCompany>;

const func1 = (num1:number, string1:string) => {
  return {num1,string1, a: {}}
}

// infer 类型推断

// 返回值类型
type T1 = ReturnType<typeof func1>

// 参数类型
type T2 = Parameters<typeof func1>

const fun2 = ():T1 => {
  return {num1: 1, string1: '2', a: {}}
}

//
class Person {
  constructor(name:string, age:number) {
    return {name, age};
  }
}

type T3 = InstanceType<typeof Person>

// 构造函数的参数
type T5 = ConstructorParameters<typeof Person>

type TailToHead<T extends any[]> = T extends [...infer Rest, infer Last] ? [Last, ...Rest] : [];

type T6 = TailToHead<["天通苑", 1, 2, '回龙观']>






export {};
