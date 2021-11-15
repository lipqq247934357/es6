"use strict";
exports.__esModule = true;
//
var Shape;
(function (Shape) {
    function square(x, y) {
        return x * y;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.square(1, 3));
// 实现原理：闭包
exports["default"] = {};
