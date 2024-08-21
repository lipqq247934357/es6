function ToUpperCase(prefix: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    let original = descriptor.set;
    // Object.defineProperty
    // writeble
    // configurable
    // value
    // get
    // set
    descriptor.set = function (newVal) {
      original?.call(this, prefix + newVal.toUpperCase());
    };
  };
}

// 描述类 静态成员 都是类本身（target）
// 描述的是原型 、 实例属性 都是类的原型（target）

function Params(target: any, key: any, index: number) {
  console.log(target, key, index);
}

class Animal {
  constructor(@Params a: string) {} // 构造函数中的参数装饰器 指代的是类本身， key是undefined
  private _value!: string;
  // 在装饰器代码中 使用场景不多
  get value() {
    return this._value;
  }
  @ToUpperCase("$$")
  set value(newVal) {
    this._value = newVal;
  }
  eat(@Params val: string) {}
}
const animal = new Animal("a");
animal.value = "abc";

console.log(animal.value);
export {};
