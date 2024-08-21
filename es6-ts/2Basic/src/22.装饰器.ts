// 装饰器， 平时用不到，装饰器是基于类的。  mobx   nestjs主要就是靠装饰器来实现的

// 装饰器是一个试验性语法，说明后续的具体的实现 可能会发生变化

// 什么是装饰器 ， 本质就是函数， 只能在类和类的成员上使用
// ts装饰器：
// 1.类装饰器、
// 2.（静态方法，原型方法）方法装饰器

// 后面我们不会独立使用
// 3.（静态属性、静态方法）属性装饰器、
// 4. (get 、 set)访问符号装饰器
// 5. (原型函数、构造函数)参数装饰器

function ClassDecorator(target: any) {
  // target 指向的是类本身
  target.type = "动物";
  target.getType = function () {
    return this.type;
  };
  target.prototype.eat = function () {
    console.log("animal eat");
  };
}
function OverrideDecorator(target: any) {
  return class extends target {
    eat() {
      // 重写animal类
      super.eat();
      console.log("child eat");
    }
  };
}
/*
@OverrideDecorator
@ClassDecorator
class Animal {}

console.log((Animal as any).type, (Animal as any).getType());
const animal = new Animal();
(animal as any).eat();
*/

// 方法装饰器

function Enum(isEnm: boolean) {
  // 类的原型
  // 属性名
  // 属性访问器
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    // 装饰器函数
    descriptor.enumerable = isEnm;
    let original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("prev");
      original.call(this, ...args);
      console.log("next");
    };
  };
}

function toUpperCase(target: any, key: string) {
  // 我门不会采用属性访问器来扩展
  let value = "";
  Object.defineProperty(target, key, {
    // 给原型添加属性
    // 属性劫持？
    get() {
      return value;
    },
    set(newVal) {
      value = newVal.toUpperCase();
    },
  });
}

// class Animal {
//   name = 'abc'
// }
// class Animal {
//   constructor(){
//     this.name = 'abc'
//   }
// }
class Animal {
  @Enum(true)
  eat() {
    console.log("eat");
  }
  @toUpperCase
  public name = "abc"; // 给实例添加属性
}
// 如果编译成esNext Animal {name=abc} 默认此值就在函数上 ， 但是如果变成es2015 那么此值是在new的时候才负值的
const animal = new Animal();
// animal.name = "bbb";
console.log(animal.name);

// 对类 和  方法进行装饰是有意义的
/*
class A {
  a = 1;
}
class A {
  constructor() {
    this.a = 1;
  }
}*/

export {};
