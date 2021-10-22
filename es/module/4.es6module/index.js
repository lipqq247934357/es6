/**
 * 
 * export const a = 100；
 *  webpack实现:使用Object.defineProperties，可以直接访问变量，利用函数的闭包，无论这个变量怎么变，都是直接访问的该变量；
 * export default name;
 *  default = name; 赋值语句，返回default，name如果是基本类型，修改name是不会修改default的，
 *  name无论是什么类型，重新给name赋值仍然不会影响default的值；
 */
import m1 from "./m1.js";