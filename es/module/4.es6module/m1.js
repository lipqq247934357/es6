import { a, getAge } from "./m2.js";
import num from "./m3.js";
import getName from "./m4.js";
console.log("=====获取年龄===");
getAge();
console.log("=====获取名字===");
getName();
setTimeout(() => {
    console.log("====100ms之后====");
    console.log("====基本类型仍然会变====");
    console.log(a);
    console.log("========");
    console.log("==== default 基本类型不会变====");
    console.log(num);
    console.log("========");
    console.log("=====default获取更新后的名字,不会变===");
    getName();
    console.log("=====export 基本导出 获取年龄，发生变化===");
    getAge();
}, 100);

export default {};