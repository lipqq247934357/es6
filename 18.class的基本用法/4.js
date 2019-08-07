class Parent {
    static myMethod(msg) {
        console.log(`static`, msg);
    }

    myMethod(msg) {
        console.log('instance', msg);
    }
}

class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);
    }

    myMethod(msg) {
        super.myMethod(msg);
    }
}

Child.myMethod(1);
let child = new Child();
child.myMethod(2);
