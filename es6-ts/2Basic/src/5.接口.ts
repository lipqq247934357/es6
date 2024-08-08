// 接口： 抽象类（可抽象，可非抽象的方法和变量） 接口是没有具体的实现
// 接口的概念  就是描述数据的结构，或者相撞的，定义好结构，再去针对结构来进行实现

// type和interface的区别
// 一般情况下，描述对象，类，我们采用interface多一些，interface无法声明联合类型
// type:可以快速声明类型；联合类型，交叉类型等其他区复杂类型只能用type，type不能重名

// type用的更多，能用type就用type

// 1) 接口描述对象

interface IPerson {
  username: string;
  age: number;
}

let person: IPerson = {
  username: "lipeng",
  age: 30,
};

// ！表示非空断言操作符 表示username和age在使用时不会是undefined和null；
class Person {
  username!: string;
  age!: number;
}

let obj = {
  username: "lipeng",
  age: 30,
  address: "",
};

let person2: Person = obj;

// 2）接口描述函数

interface ICounter {
  (): number; // 函数返回值是number类型
  count: number;
}

// 给函数增加类型定义，一般用const
const counter: ICounter = () => {
  return counter.count++;
};
counter.count = 0;

// 在对象上某个属性可能有可能没有如何处理呢？
// 1.可以在某个属性上增加 ?: 比如： color?: string;
// 2.对某个对象进行断言： {...} as IVeg 类似强转
// 3.或者使用接口的合并，将下面接口和老接口合
/**
 * interface IVeg {
     color?: string;
  }
 */

// 4.扩展类型来使用
/**
 *
 * interface IVegg extends Iveg {
 *  color?: string;
 * }
 */
// 5.任意类型
/**
 * [key: string]:any
 */

interface IVeg {
  name: string;
  taste: string;
  size: number;
  color: string;
}

const veg: IVeg = {
  name: "西红柿",
  taste: "甜",
  size: 50,
  color: "red",
} as IVeg;

// 索引接口
interface IArray {
  [key: number]: any;
}

// 接口嵌套

interface ResponseData {
  username: string;
  token: string;
}

interface ReturnVal {
  code: number;
  data: ResponseData;
}

// 通过索引控制，来获取内部类型

type ICode = ReturnVal["code"];
type useName = ReturnVal["data"]["username"];

type Ikeys = ReturnVal[keyof ReturnVal]; // type Ikeys = number | ResponseData,取值的类型，可以采用这种方式

// 接口可以实现，接口的实现都是通过类来实现 一个类可以实现多个接口
// 一个接口可以继承多个接口
interface Speakable {
  speak(): void; // 这种写法是类的原型方法
  speak2: () => void; // 这种写法是类的实例方法
}

class Speaker implements Speakable {
  constructor(speak2: () => void) {
    this.speak2 = speak2;
  }
  speak2: () => void;
  speak(): void {
    throw new Error("Method not implemented.");
  }
}

new Speaker(() => {
  console.log(1111);
});

// 如何表示我要传入的是一个类

class Dog {
  
}

class Cat {

}

// 类类型 不能描述本身 描述的是本身的实例
// 类的类型 需要通过 1)typeof 来取类型 2) new () => Dog
// ts的校验规则  鸭子类型检测

// 描述构造函数
interface IClazz<T> {
  new (name: string): T
}

// 和上面是等价的
type IClazz2<T> = new (name: string) => T

function createInstance<T>(clazz: IClazz<T>, name: string) {
  return new clazz(name);
}

const instance = createInstance(Dog, '旺财');

export {};
