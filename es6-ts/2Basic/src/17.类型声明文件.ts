// 1.es6模块 需要能转化成不能同的模块方式  commonjs规范 （require,exports）， amd模块 (define)  导出的是amd 需要配置file入口
// umd: 支持直接进行转化
// import a from "./module/a";

// 2.如果需要使用commonjs 需要安装  pnpm i --save-dev @types/node
// commonjs 规范 可以转化成amd
// const a = require("./module/a");
// console.log(a);

// target 指代的是语法
// module 导出的模块规范是什么

// 3.ts中为了 能做到 commonjs 和 amd的互转 ，自己发明了一种写法 (export = / import = )
// import a from "./module/a";

// import a = require("./module/a");
// console.log(a);

// 4.我们基本用不到 export =  和 import = ,我门可以直接采用es6module
// import a from "./module/a"; // 直接采用esModule

// import {}
// import {xxx as xxx}
// import()

// 外部模块的使用
// .cjs 是commonjs规范  .mjs在node中使用es模块

// esModule  es6规范 import export
// umd 模块   统一规范 支持 commonjs和 amd
// commonjs node来使用的 require module.exports
// amd  requirejs来使用的 define([],function(){})
// iife  立即执行函数   var name = (function(){})()
// systemjs  为微端使用的

// 最终编写的代码 我门需要将其转化成js来去使用 ， 需要给打包后的结果添加类型
// .d.ts

// 1.打包后只生产js  没有类型了. 可以开启配置中自动生成类型文件 （你的代码得使用ts来编写的）
// 2.我门使用了一个js包，没有ts的类型, 需要自己编写 ，也可以安装 npm i --save-dev @types/jquery
// 3.通过cdn外链了一个js库, 也需要声明文件
// 4.扩展全局的属性的时候 也需要写声明文件
// 5.特殊文件的处理也需要声明文件
// import jquery from "jquery";

// 为了让我门在写代码的时候 不会导致编码丢失类型
// declare 主要是用于声明类型的 (全局声明)

// let person: Person2 = {
//   a: 2,
// };
// console.log(Season.Spring);

// 1） 通过cdn的方式引入的全局变量 ， 我门可以自己写类型让他支持 （不报错）
// $(".ele").height(30).width(30);
// $.ajax("/url", {});
// $.fn.extend({});

import mitt, { Type, Listener } from "mitt";

const fn: Listener = function () {};
mitt.on("data", fn);
mitt.off("data", function () {});
mitt.emit("data", function () {});

// 导入的是一个值， 这个值我希望有类型
import comp from "a.vue";
console.log(comp);

import jpg from "a.jpg";
console.log(jpg);

import css from "a.css";

// 标识这个属性是全局的global的
/* declare global {
    interface String {
    my(prefix: string): this;
    }
 }*/
String.prototype.my = function (prefix: string) {
  return prefix + this;
};
window.store;
// 如果有人已经给这个模块编写好类型了，我门就可以直接用人家的来操作

export {};
