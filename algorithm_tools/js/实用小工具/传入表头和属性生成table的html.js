/**
 * 将key,value形式，拼接成el-table的代码结构
 * @type {string}
 */

let prop =
    `listId
channelName
prodName
custName
idNo
loanAmount
loanTerm
beginDate
assureFeeRate
interestRate
sAssureAmount
sChannelAmount
rAssureAmount
sDate
overDays
bInte
rAmount
rCapi
rInte
rFine
rFoul
bal
sPaidAmount
sSettleBal
sSettleInte
rSettleBal
rSettleInte
acFlag
assureStatus
declareDate
compensateDate
`;

prop = prop.split('\n'); // 字段数组
let title = [ // title数组
    '借据号',
    '渠道名称',
    '产品名称',
    '姓名',
    '证件号码',
    '借款金额',
    '借款期限',
    '放款日期',
    '担保费率',
    '借款费率（年）',
    '应收担保费',
    '应付通道费',
    '实收担保费',
    '应还日期',
    '逾期天数',
    '逾期利息',
    '实还总金额',
    '实还本金',
    '实还利息',
    '实还罚息',
    '实还违约金',
    '贷款余额',
    '待赔付金额',
    '应收理赔本金',
    '应收理赔利息',
    '实收理赔本金',
    '实收理赔利息',
    '借据状态',
    '担保状态',
    '申报日期',
    '代偿日期',
    '操作'];

function genrator(title, prop) {


    function template(title, prop) {
        let str =
            '<el-table-column' +
            '   label="$$"' +
            '   prop="**">' +
            '</el-table-column>';
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
