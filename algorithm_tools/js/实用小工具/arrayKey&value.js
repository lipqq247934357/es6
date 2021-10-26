import { strToArr } from "../utils.js";
/**
 * 将key,value形式，拼接成el-table的代码结构
 */
/**
 * 
 * @param {string|number} key1
 * @param {string|number} key2
 * @returns {string}
 */

function genrator(key1, key2) {
    const template = (key1, key2) => {
        return `
        <el-table-column
           label="${key1}"
           prop="${key2}">
        </el-table-column>`;
    }
    let strs = '';
    for (let i = 0; i < key1.length; i++) {
        strs += template(key1[i], key2[i]);
    }
    return strs;
}

let prop =
    `listId
channelName
prodName`;

prop = strToArr(prop, '\n'); // 字段数组
let title = [ // title数组
    '借据号',
    '渠道名称',
    '产品名称'];

let strs = genrator(title, prop);
console.log(strs);