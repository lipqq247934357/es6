// 类型推导

// 1）基本类型推导

let a; // 没有给a赋值，所以a的类型是any
const b = 1; // const声明的变量，类型默认是值，这个里面类型是 “1”；
let c = 2; // let声明的变量 可以修改，所以类型范围会扩大；

// 2）联合类型推导
let strOrNum: string | number;
// 对于联合类型，我们最好先赋值，然后再执行，操作，这样类型就是确定的；
// 这叫做制定类型再使用

// strOrNum = '2';

// 也可以使用断言 as 表示 设置成某种类型  变量后面加“!”表示非空断言，就是这个变量的值不是空的；

(strOrNum! as string);

(strOrNum! as unknown as boolean) // 双重断言，一般不建议使用

export {};