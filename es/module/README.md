# 模块化

1&2.amd，cmd
    用的少，过时了，不赘述  
3.umd(amd+commonjs)  
    根据全局变量判断是使用amd格式还是commonjs格式,[官网地址](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js)
    目前也过时了；
4.[commonjs](http://javascript.ruanyifeng.com/nodejs/module.html)  
    1.node端默认的模块化
    2.现在node端也支持es6 module
    3.也可以用于来浏览器端使用的模块依赖，但不可以直接使用  
5.es6 module  
    参考es6 module  
6.webpack module
    1.webpack实现了一套方案可以兼容所有的目前存在的主流模块，可以实现模块之间的转换  
        1.不支持cmd（seajs）  
        2.将es6module代码转化成commonjs模块格式，但是功能按照es6 module原理实现  
    2.同时会使用动态import进行代码分割
