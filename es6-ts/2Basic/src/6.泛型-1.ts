// 泛型：可以用于函数，接口，类，type

// 如果在使用的时候 无法确定当前类型，可以采用泛型来定义
const createArr = <T>(times: number, val: T): T[] => {
  return Array.from({ length: times }).fill(val) as T[];
};

// 在使用的时候他会自动推导类型，比如这个地方的类型是number，那么他就会识别T标识number类型
createArr(1, 1);

// 交互函数的值
function swap<K, T>(tuple: [K, T]): [T, K] {
  return [tuple[1], tuple[0]];
}

const r = swap(["a", true]);

// interface IforEach {
//   <T>(arr: T[], callback: (val: T) => void): void;
// }

type IforEach = <T>(arr: T[], callback: (val: T) => void) => void

// 泛型的声明和使用应该保持连贯，否则就没有类型推导了；
const forEach: IforEach = (arr, callback) => {};

forEach([1, 2, 'string'], function (val) {
  console.log(val);
});

export {};
