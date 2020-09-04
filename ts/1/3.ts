/**
 * 对象类型的接口：
 *
 */

interface list {
    id: number;
    name: string;
    age?: number;

    [x: string]: any; // 可索引类型接口
}

interface Result {
    data: list[]
}

function render(result: Result) {
    result.data.forEach(item => {
        console.log(item.id, item.name)
    })
}

let result = {
    data: [
        {id: 1, name: '2', age: 3},
        {id: 2, name: '2'}
    ]
};

render(result);

render({
    data: [
        {id: 1, name: '2', age: 3},
        {id: 2, name: '2'}
    ]
} as Result);


interface StringArray {
    [index: number]: string;

    [index: string]: string;
}

let aaa: StringArray = {
    1: '2',
    'a': 'c'
};

