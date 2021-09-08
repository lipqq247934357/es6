/**
 * 1.使用对象的方式封装模块
 * 2.__webpack_module_cache__ 缓存所有的变量
 * 3.自己实现一个commonjs规范加载机制
 * 4.定义了一些公共方法
 *  4.1 .r define __esModule on exports
 *  4.2 .o object have property handshort
 *  4.3 .d 给module.exports对象增加属性，通过get方法，引用原来的对象，从而模拟es6 module逻辑
 * 5.执行入口模块
 * 6.根据对应的模块加载对应的代码
 * 
 * 7.其他公共方法
 *  .m export module object
 *  .f
 *  .f.j jsonp加载chunk
 *  .e loading function for other chunks
 *  .u return module name
 *  .g return global
 *  .l load script via script tag
 *  
 *  */

 (() => { // webpackBootstrap
    "use strict";
    var __webpack_modules__ = ({
  
      "./src/1.js":
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__);
          __webpack_require__.d(__webpack_exports__, {
            "name": () => (/* binding */ name),
            "func": () => (/* binding */ func)
            /* harmony export */
          });
          let age = 28;
          let name = 'lipeng';
          function func() {
            console.log(age);
          }
          setTimeout(() => {
            age = 22;
            func = () => {
              console.log(age + 22);
            }
          }, 1000);
        })
  
    });
    // The module cache
    var __webpack_module_cache__ = {};
  
    // The require function
    function __webpack_require__(moduleId) {
      // Check if module is in cache
      var cachedModule = __webpack_module_cache__[moduleId];
      if (cachedModule !== undefined) {
        return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = __webpack_module_cache__[moduleId] = {
        // no module.id needed
        // no module.loaded needed
        exports: {}
      };
  
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  
      // Return the exports of the module
      return module.exports;
    }
  
    /************************************************************************/
    /* webpack/runtime/define property getters */
    (() => {
      // define getter functions for harmony exports
      __webpack_require__.d = (exports, definition) => {
        for (var key in definition) {
          if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          }
        }
      };
    })();
  
    /* webpack/runtime/hasOwnProperty shorthand */
    (() => {
      __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    })();
  
    /* webpack/runtime/make namespace object */
    (() => {
      // define __esModule on exports
      __webpack_require__.r = (exports) => {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
      };
    })();
  
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
      __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.js */ "./src/1.js");
  
      (0, _1_js__WEBPACK_IMPORTED_MODULE_0__.func)();
      console.log(_1_js__WEBPACK_IMPORTED_MODULE_0__.name);
      setTimeout(() => {
        (0, _1_js__WEBPACK_IMPORTED_MODULE_0__.func)();
      }, 1900);
    })();
  
  })();