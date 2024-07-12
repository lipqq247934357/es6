(function () {
  'use strict';

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  // 类：  类的组成： 构造函数，属性（实例属性，原型属性），方法（实例的方法，原型方法，静态方法） 访问器，静态相关的
  // 类的修饰符  和java一样的
  // public 公开属性，类的实例在外部可以访问这个属性，类的内部也可以访问。继承的子类也可以访问
  // protected 自己能访问，儿子能访问，外部无法访问
  // private 私有的，只有自己能访问
  // let circle = new Circle(100, 100);
  // circle.x; // 属性“x”为私有属性，只能在类“Circle”中访问。
  // readonly 只读的 初始化完之后不能再修改值了
  var Animal = /** @class */ (function () {
      function Animal(name) {
          this.name = name;
          // 等价于 每个属性增添了public
      }
      // 原型方法 就是每个实例共享的方法，父类提供的方法，子类是可以进行重写的
      Animal.prototype.changeName = function (value, age) {
          this.name = value;
      };
      return Animal;
  }());
  /** @class */ ((function (_super) {
      __extends(Cat, _super);
      function Cat(name, age) {
          var _this = _super.call(this, name) || this;
          _this.age = age;
          return _this;
      }
      Cat.prototype.changeName = function (value, age) {
          _super.prototype.changeName.call(this, value, age);
      };
      return Cat;
  })(Animal));

})();
//# sourceMappingURL=bundle.js.map


// es6 class的继承和 ts的class的继承 和 es5的继承 在底层逻辑上是非常相似的；但是语法更加优化和简洁
