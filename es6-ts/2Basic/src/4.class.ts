// 类：  类的组成： 构造函数，属性（实例属性，原型属性），方法（实例的方法，原型方法，静态方法） 访问器，静态相关的

// 我感觉目前class的写法在vue或者react中非常少，感觉这个语法使用的很少，所以大概复习复习就行

class Circle {
  private x: number;
  public y: number;
  public fn: () => number;
  readonly roValue: number; // 只读属性
  static sValue: number; // 原型上的属性
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.roValue = x * y;
    this.fn = () => {
      return this.x * this.y;
    };
  }
  // public changeName = () =>{
  //   this.roValue = 1; // 无法为“roValue”赋值，因为它是只读属性。
  // }
}

// 类的修饰符  和java一样的
// public 公开属性，类的实例在外部可以访问这个属性，类的内部也可以访问。继承的子类也可以访问
// protected 自己能访问，儿子能访问，外部无法访问
// private 私有的，只有自己能访问
// let circle = new Circle(100, 100);
// circle.x; // 属性“x”为私有属性，只能在类“Circle”中访问。
// readonly 只读的 初始化完之后不能再修改值了

class Animal {
  public static age: number;
  constructor(public name: string, age: number) {
    // 等价于 每个属性增添了public
    this.name = name;
    age = age;
  }
  // 原型方法 就是每个实例共享的方法，父类提供的方法，子类是可以进行重写的
  changeName(value: string, age: number) {
    this.name = value;
  }
  static changeAge(age: number) {
    age = age;
  }
}

class Cat extends Animal {
  constructor(name: string, public readonly age: number) {
    super(name, age);
  }

  changeName(value: string, age: number): void {
    super.changeName(value, age);
  }

}


// 单例类

class Singleton{
  static instance = new Singleton();
  protected constructor() {}
  static getInstance() {
    return this.instance;
  }
}


// 抽象类 abstract
// 抽象类 可以含有非抽象的方法和属性， 不会new它， 抽象类可以被继承，抽象类中抽象方法子类必须要实现

abstract class Animal2 {
  drink() {
    
  }

  abstract eat(): void

}

// 在 es6-ts/readMe2.md  下有视频教程地址，这一章节内容面试基本不问，所以只是大概看了，但是没总结

// 因为：在vue和react中，讲究：组合优于继承  所以目前很少写class了

export {};
