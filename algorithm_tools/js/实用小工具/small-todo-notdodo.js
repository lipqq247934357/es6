/**
 * 
 * 类比演进
 */

let start = 1;
let end = 10;

let startCast = 1;
let interval = 7;

/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @param {number} startCast 
 * @param {number} interval 
 */

function castList(start, end, startCast, interval) {


}

// 将数组的第一项和第二项分别提取出来
import { getArrByIndex } from "../utils.js";
/**
 *
 * @type {string}
 */

let correctBox = `6097532288591899
    课中-学情信息`;

correctBox = correctBox.split("\n");
let code = getArrByIndex(correctBox, 2, 0);
let name = getArrByIndex(correctBox, 2, 1);

for (let i = 0; i < code.length; i++) {
  console.log(`aa:${code[i]}, //${name[i]}`);
}
