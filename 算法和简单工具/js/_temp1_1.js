/**
 *prop:
 *  table的属性
 *title:
 *  table的表头
 *
 */

let prop = `prodNo
prodName
prodDesc
channelNo
channelName
useYn
inputUser
createTime
assureFeeRate
assureBeginDate
assureEndDate`;
prop = prop.split('\n'); // 字段数组
let title =
    `金融产品编号
金融产品名称
金融产品描述
渠道编码
渠道名称
是否启用
录入人
操作时间
担保费率
担保开始时间
担保结束时间`;

title = title.split('\n');

function genrator(title, prop) {


    function template(title, prop) {
        let str =
            '<el-table-column\n' +
            '   label="$$"\n' +
            '   prop="**">\n' +
            '</el-table-column>\n';
        str = str.replace('$$', title);
        str = str.replace('**', prop);
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
