class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 10;
    }

    toString() {
        return '(x:' + this.x + 'y:' + this.y + 'z:' + this.z + ')';
    }
}


console.log(Point.prototype.toString);


console.log(new Point(1, 2).__proto__.toString);

let obj = {a: 1, prototype: {}};

console.log(obj.__proto__);

console.log(Object.prototype);

console.log(Point === Point.prototype.constructor);
console.log(Point.prototype.constructor);

//默认不存在prototype属性
console.log(obj.prototype.constructor === obj)

function aaaa(){

}

console.log(aaaa.prototype.constructor === aaaa);


console.log(typeof new Point(1, 2));