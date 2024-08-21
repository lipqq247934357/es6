import _ = require("./lodash");

// 在人家模块的基础上扩展属性，直接定义类型
declare module "./lodash" {
  // 针对特定的接口来进行扩展
  interface Lodash {
    withIn(): void;
  }
}
