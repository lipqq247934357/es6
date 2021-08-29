# 模块化

1.amd  
    TODO:  
    amd可以使用经过处理后的commonjs模块，主要是代码合并和  
2.cmd  
    用的少，过时了，不赘述  
3.[commonjs](http://javascript.ruanyifeng.com/nodejs/module.html)  
    1.主要是在node中使用  
    2.也可以用于来浏览器端使用的模块依赖，但不可以直接使用  
4.umd(amd+commonjs)  
    根据全局变量判断是使用amd格式还是commonjs格式,[官网地址](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js)  
5.es6 module  
    参考es6 module  
6.webpack module  
    1.webpack实现了一套方案可以兼容所有的目前存在的主流模块，可以实现模块之间的转换
        注:不支持cmd（seajs）
    2.同时会使用动态import进行代码分割
