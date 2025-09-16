import { strToArr } from "../../../algorithm_tools/js/utils.js";
/**
 * 之前使用element-ui的时候生成模板的表头用的，现在这个已经用的很少了，而且这个交给chatGpt非常简单；
 * AI对前端的冲击太大了,大大提高了效率，导致现在搞代码更卷了
 * 根据表头的名字和字段生成表头html
 *  这个在生成表单头部的时候比较好用，但是使用的很少
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