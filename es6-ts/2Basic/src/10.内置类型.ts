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

type PartialCompany = Partial<ICompany>;

export {};
