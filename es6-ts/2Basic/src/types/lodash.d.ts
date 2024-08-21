/// <reference path="./lodash.e.d.ts"/>
/// <reference lib="es2017.string" />
// 三斜线指令 可以用引用其他的声明文件

"foo".padStart;
declare const _: _.Lodash;

declare namespace _ {
  interface Lodash {
    copy(): void;
  }
}

export as namespace _; // 将这个命名空间变成全局的不需要导入即可使用
export = _; // 为了用户可以导入
