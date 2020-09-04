/**
 *
 * 接口和接口之间可以互相继承
 * 类和类之间也可以互相继承
 *
 * 类可以实现接口
 *
 * 接口可以继承类
 *
 */

interface Human {
    name: string;

    eat(): void
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
    }

    name: string;
}
