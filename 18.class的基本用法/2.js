class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(this.x:${this.x},this.y:${this.y})`;
    }

}

class ColorPoint extends Point {

    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString();
    }

}

let p = new ColorPoint(1, 2, 'green');

console.log(p.toString());
