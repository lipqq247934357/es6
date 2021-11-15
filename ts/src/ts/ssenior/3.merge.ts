interface A {
  x: number;
  foo(bar: number): number; // 3
}

interface A {
  y: number;
  foo(bar: string): string; // 1
  foo(bar: number[]): number[]; // 2
}

let a: A = {
  x: 1,
  y: 2,
  foo(str: number | string | string[]) {
    return str;
  },
};

/**
 *
 * 声明合并：
 * 接口合并，即使在不同的页面，也存在接口合并
 * 1.参数会合并
 * 2.函数会重载
 */

export default {};
