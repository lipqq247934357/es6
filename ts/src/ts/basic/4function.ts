/**
 *
 * 定义函数的4种方法
 * */

function add1(x: number, y: number): number {
  return x + y;
}
let add2: (x: number, y: number) => number;
type add3 = (x: number, y: number) => number;
interface add4 {
  (x: number, y: number): number;
}

// 函数参数

function add5(x: number, y?: number): number {
  return y ? x + y : x;
}

add5(1);

function add6(x: number, y = 4): number {
  return x + y;
}

add6(4);

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

add7(1, 2, 34, 5, 6, 7);

// 函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
    let first = rest[0];
    if(typeof first === 'number') {
        return rest.reduce((val,curr) =>  val+ curr);
    } else {
        return rest.join('');
    }
}

console.log(add8(1,2,3));
console.log(add8('a','b','c'));

export default {};
