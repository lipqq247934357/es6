import { a } from "./m2.js";
import num from "./m3.js";
setTimeout(() => {
    console.log("====基本类型仍然会变====");
    console.log(a);
    console.log("========");
    console.log("==== default 基本类型不会变====");
    console.log(num);
    console.log("========");

}, 100);

export default {};