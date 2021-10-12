import { strToArr } from "../utils.js";
/**
 * 将key,value形式，拼接成el-table的代码结构
 */

/**
 * 
 * @param {*} title 标题
 * @param {*} prop 属性字符串
 * @returns 
 */

function genrator(title, prop) {
    const template = (title, prop) => {
        return `
        <el-table-column
           label="${title}"
           prop="${prop}">
        </el-table-column>`;
    }
    let strs = '';
    for (let i = 0; i < title.length; i++) {
        strs += template(title[i], prop[i]);
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