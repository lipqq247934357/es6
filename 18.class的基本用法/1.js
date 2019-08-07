class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x},${this.y})`;
    }

    static staticFunc(){
        console.log(2)
    }
}

class PointChild extends Point {
    static classMethod(){
        console.log(3);
        return super.staticFunc();
    }
}


var p = new Point(1,2);
console.log(p.toString());

Point.staticFunc();

PointChild.classMethod();
