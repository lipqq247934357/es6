<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [treeshaking 原理](#treeshaking-原理)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## treeshaking 原理

    1.ES6模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是tree-shaking的基础；
    2.其他的模块,比如commonjs，amd等都是先加载，然后才导出模块；
    3.使用其他工具进行词法分析，然后去掉不用的代码；
