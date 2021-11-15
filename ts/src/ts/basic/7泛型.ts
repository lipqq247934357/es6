/**
 *
 * 泛型：预先定义的，不确定的，运行时确定的类型
 * @param name
 */

interface Person {
  name:string
}

// 泛型函数
function log<T>(arg: T): T {
  return arg;
}

let log1 = log<string>("name"); // 详细写法
let log2 = log("name"); // 省略泛型，ts自动推断，普遍使用
console.log(log2);

type fanXin = <T>(name: T) => T;

let myLog: fanXin = <T>(value: T): T => {
  return value;
};

myLog<string>("1");
myLog("1"); // 较多用法，自动类型推断

interface Log<T> {
  (value: T): string;
}


// TODO: 接口泛型
// let myLog2: Log<string> = {
//   value: "lipeng",
// };

/**
 * 泛型约束: 约束T可以接受的类型
 * 泛型可以应用于接口，类，函数
 */

 interface length {
    length: number
}

function func<T extends length>(param: T) {
    return param.length;
}

// 有length属性的值都可以传进去
func('1')
func([])

/**
 *
 * 泛型的好处:
 *  1.函数和类可以轻松的支持多种类型，增强程序的扩展性
 *  2.不必写多条函数重载，冗长的联合类型声明，增强代码可读性
 *  3.灵活控制类型之间的约束
 */


export default {};
