// 一般所有的声明文件 不会单独放在业务代码中， 一般都抽离到.d.ts中

declare const a: number;
declare function sum(a: string, b: string): string;
declare class Person {}
declare interface Person {
  a: 1;
}
declare type Person2 = { a: 2 };
declare const enum Season {
  Spring,
  Winter,
}
// 自己写
interface JQuery {
  height(num: number): this;
  width(num: number): this;
  extend(obj: object): this;
}
declare const $: {
  (selector: string): JQuery;
  ajax(url: string, options: Record<string, any>): void;
  fn: JQuery;
};

// 特定的某个模块
declare module "mitt" {
  type Type = string;
  type Listener = (...args: any[]) => void;
  const on: (type: string, listener: Listener) => void;
  const off: (type: string, listener: Listener) => void;
  const emit: (type: string, listener: Listener) => void;

  // 可以自己选择哪些导出
  //   export { Type, Listener };
}

// 只要是以.vue结尾的就命中
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const comp: DefineComponent;
  export default comp;
}

declare module "*.jpg" {
  const str: string;
  export default str;
}

declare module "*.css" {
  const str: string;
  export default str;
}
declare interface String {
  my(prefix: string): this;
}
declare interface Window {
  store: object;
}
