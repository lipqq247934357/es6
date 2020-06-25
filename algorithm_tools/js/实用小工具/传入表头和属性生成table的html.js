/**
 * 将key,value形式，拼接成el-table的代码结构
 * @type {string}
 */

let prop =
    `listId
channelName
prodName`;

prop = prop.split('\n'); // 字段数组
let title = [ // title数组
    '借据号',
    '渠道名称',
    '产品名称'];

function genrator(title, prop) {
    function template(title, prop) {
        let str =`
            <el-table-column
               label="${title}"
               prop="${prop}">
            </el-table-column>`;
        return str;
    }
    let str2 = '';
    for (let i = 0; i < title.length; i++) {
        str2 += template(title[i], prop[i]);
    }
    console.log(str2);
    return str2;
}

genrator(title, prop);
