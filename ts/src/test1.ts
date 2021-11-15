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
  foo: (bar: number) => {
    return bar;
  }
};

// 命名空间可以和类和枚举进行合并

export default {};
