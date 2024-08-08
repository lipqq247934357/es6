// 联合类型 或运算（|） 交叉类型  交集  与运算（&）

interface Person1 {
  handsome: string;
  age: number;
}

interface Person2 {
  high: string;
}

// 联合类型 值可以是多种类型中的一种，必须是其中一种，而不是其中一种的部分
type unionPerson = Person1 | Person2;
let person: unionPerson = {
  handsome: '1',
  // age: 1,
  high: '2'
}


// 交叉类型 将多个类型合并为一个类型 person2必须拥有Person1和Person2的所有类型  就是同时具有所有类型的所有成员
type interPerson = Person1 & Person2
let person2: interPerson = {
  handsome: '1',
  age: 2,
  high: '2'
}

export {};
