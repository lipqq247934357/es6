// 联合类型 或运算（|） 交叉类型  交集  与运算（&）

interface Person1 {
  handsome: string;
}

interface Person2 {
  high: string;
}

// 联合类型 可以是多种类型中的一种
let person: Person1 | Person2 = {
  handsome: '1',
  // high: '2'
}

// 交叉类型 将多个类型合并为一个类型 person2必须拥有Person1和Person2的所有类型
let person2: Person1 & Person2 = {
  handsome: '1',
  high: '2'
}

export {};
