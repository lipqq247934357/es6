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
