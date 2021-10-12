import { strToArr } from "../utils.js";
/**
 * 将key,value形式，拼接成el-table的代码结构
 */

/**
 * 
 * @param {*} key1
 * @param {*} key2
 * @returns 
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
    console.log(strs);
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

genrator(title, prop);