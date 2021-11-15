//
namespace Shape {
  export function square(x: number, y: number) {
    return x * y;
  }
}

console.log(Shape.square(1, 3));

// 实现原理：闭包 这个是历史兼容性，现在的模块化系统已经不再需要命名空间

export default {};
