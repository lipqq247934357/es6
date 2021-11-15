/**
 * TODO: 现在都写hooks没有看
 * 1.所有属性默认都是public
 * 2.私有成员
 *      只能在类的本身调用，不能被实例调用，不能被子类调用
 *      构造函数增加私有属性，既不能被实例化，也不能被继承
 * 3.受保护成员
 *       在类和类的子类中访问
 *       不能在类的实例中访问
 *       构造函数增加受保护属性，只能被继承，不能被实例化
 * 4.只读属性
 *       属性是不可以被更改的，必须被初始化
 * 5.构造参数也可以添加修饰符
 *       会被设置为实例的属性
 * 6.静态成员
 *        只能通过类名来调用，不能通过实例调用
 *        静态成员也可以被继承
 *        
 */

class Dog {
    constructor(name: string) {
        this.name = name;
    }

    name: string;

    static age: number = 12;

    run() {
    }
}

class Husky extends Dog {
    constructor(name: string, color: string) {
        super('name');
        this.color = color;
    }

    color: string;
}



/**
 * 抽象类
 */
 abstract class Animal {
    abstract eat(): void

    drink(): string {
        return '';
    }
}

class tiger extends Animal {
    eat(): void {
    }
}

export default {};