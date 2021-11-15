/**
 *
 * 交叉类型
 *  取并集
 */

interface DogInterface {
  run(): void;
  eat(): void;
}

interface CatInterface {
  jump(): void;
  eat(): void;
}

let pet: DogInterface & DogInterface;

// 联合类型
let anyOneTypePet: DogInterface | DogInterface;
let number: 1 | 2 | 3;
let string: "a" | "b" | "c";

// 可区分的联合类型
interface Square {
  type: "square";
  size: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function getArea(shape: Shape) {
  switch (shape.type) {
    case "square":
      return shape.size * shape.size;
      break;
    case "rectangle":
      return shape.width * shape.height;
      break;
  }
}

/**
 *
 * 索引类型
 *
 */
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

interface Object {
  a: number;
  b: number;
}

let key: keyof Object;

function getValue<T, K extends keyof T>(obj: T, keys: K[]) {
  return keys.map((item) => obj[item]);
}

getValue(obj, ["a", "b", "c"]);

/**
 *
 * 映射类型
 *
 */

interface Obj {
  a: string;
  b: string;
  c: boolean;
}

// 变成只读的
type readOnlyObj = Readonly<Obj>;
// 变成可选的
type PartialObj = Partial<Obj>;
// 提取子集
type pickObj = Pick<Obj, "a" | "b">;
// 母鸡
type RecordObj = Record<"x" | "y", Obj>;

/**
 *
 * 条件类型
 *
 */

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : "object";

let a: TypeName<string>;
let b: TypeName<string[]>;
let c: TypeName<string | object>;

// 

export default {};
