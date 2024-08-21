// 如果我门在使用某些包的时候 别人提供了类型文件我门可以直接安装使用

// import $ from "mitt";

// 先查找是否自己定义过如果定义过用自己的 没定义过向上查找 node_modules

// 1）默认找当前node_modules下的同名模块，看是否有此文件夹，有的话找package.json > types
// 2) 如果没有types 默认找这个模块下的index.d.ts
// 3）查找node_modules下的 @types 是否有同名模块 ,按照上述方式继续查找
// @types/xxx 是声明文件的集合
// 默认可以指定导入的模块的 声明文件的路径

import _ from "lodash";
_.copy();
_.withIn();

// 三斜线指令可以通过types来引其他的声明文件 (第三方)
// 自己的用 path 来引入
// lib 可以加载内置类型
