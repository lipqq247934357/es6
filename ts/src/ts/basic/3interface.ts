/**
 * 使用接口定义对象:
 */

console.log('接口');

// 声明调用后端接口返回list
interface listInterface {
    id: number;
    name: string;
}

// 符合的数据
const list: listInterface[] = [
    {
        id: 1,
        name: '李雷',
    }
]

// 定义函数返回接口
interface Result {
    data: listInterface[]
}

// 使用函数
function render(result: Result): Result {
    result.data.forEach(item => {
        // console.log(item.id, item.name)
    })
    return result;
}

// 传入正确的参数
render({
    data: [
        {id: 1, name: '2'},
        {id: 2, name: '2'}
    ]
});

// 强制将字段转换成对应类型
render({
    data: [
        {id: 1, name: '2', age: 3},
        {id: 2, name: '2'}
    ]
} as Result);
// 和上面实现的功能一直
render(<Result>{
    data: [
        {id: 1, name: '2', age: 3},
        {id: 2, name: '2'}
    ]
});

// 不定参数 可以写任意数量的对应类型数据
interface StringArray {
    [index: number]: string;
    [index: string]: string;
}

let aaa: StringArray = {
    1: '2',
    2: '2',
    3: '2',
    4: '2',
    'a': 'c',
    'b': 'c',
    'c': 'c',
    'd': 'c'
};

/**
 * 接口定义函数
 */

// 定义函数
let add: (x: number, y: number) => number;
interface Add1 {
  (x: number, y: number): number;
}
//
type Add2 = (x: number, y: number) => number;
// 使用
let addd: Add2 = (a, b) => a + b;

/**
 * 混合类型接口：
 */

interface Lib {
  (): void;

  version: string;

  doSomething(): void;
}

let lib: Lib = (() => {}) as Lib;
lib.version = "1";
lib.doSomething = function () {};

export default {};