(function (modules) {
    function require(id) { //🌟
        const [fn, mapping] = modules[id];

        function localRequire(name) { //⏰
            return require(mapping[name]); //🌟
        }

        const module = {exports: {}};

        fn(localRequire, module, module.exports);

        return module.exports;
    }

    require(0);
})({
    0: [
        function (require, module, exports) {
            "use strict";

            var _message = require("./message.js.js");

            var _message2 = _interopRequireDefault(_message);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {default: obj};
            }

            console.log(_message2.default);
        },
        {"./message.js": 1},
    ], 1: [
        function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _name = require("./name.js.js");

            exports.default = "hello " + _name.name + "!";
        },
        {"./name.js": 2},
    ], 2: [
        function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var name = exports.name = 'world';
        },
        {},
    ],
});

/**
 *
 * 以上js代码为一个demo打包生成的js代码
 *
 * 具体实现原理参考：https://github.com/chinanf-boy/minipack-explain
 *  主要原理是：
 *      从入口处依次解析找出所有的模块和依赖，然后把他们组成一个对象，key为模块id，value是一个数组，第一项是使用类似commonjs模块的函数，第二部分是当前模块依赖组成的一个对象
 *      然后把它包装成自治性函数,写一个require方法，通过require函数执行入口函数，从而执行所有的代码
 *      通过require执行函数，通过module.exports返回结果
 *      中间涉及到使用babel将es6转化成ast，转换成es5的过程
 *      还有模块找到他的依赖再解析依赖的过程
 *
 */