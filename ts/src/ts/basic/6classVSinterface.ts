/**
 *
 * 接口和接口之间可以互相继承
 * 类和类之间也可以互相继承(这个是显然的)
 * 类可以实现接口
 * 接口可以继承类 就是把类的属性抽象为类型
 *
 */

interface Human {
  name: string;

  eat(): void;
}

// 接口继承接口
interface Man extends Human {
  jjLength: string;
}

let man: Man = {
  name: "",
  eat: () => {},
  jjLength: "",
};

// 类实现接口
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }

  eat(): void {}

  name: string;
}

// 接口继承类

// 接口继承类
class Box {
  size = 1;
}

interface RedBox extends Box {
  color: string;
}

let a: RedBox = {
  size: 10,
  color: "red",
};

export default {};
