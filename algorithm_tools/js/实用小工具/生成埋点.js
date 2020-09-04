let utils = require('../utils');
/**
 *
 * @type {string}
 */

// let correctBox =
//     `批改系统-课节列表-每日一练-查看按钮点击
//     点击
//     5361526545672192
//     班级ID、辅导老师ID
//     每日一练日期列表-提交人数点击
//     点击
//     5361538239129600
//     班级ID、辅导老师ID
//     每日一练日期列表-查看详情点击
//     点击
//     5361535664744448
//     班级ID、辅导老师ID`;

// correctBox = correctBox.split('\n');
// let code = utils.getArrByIndex(correctBox, 4, 2); 
// let name = utils.getArrByIndex(correctBox, 4, 0);

// for(let i=0;i<code.length;i++) {
//     console.log(`aa:${code[i]}, //${name[i]}`);
// }

let data = {
    DAILY_PRACTICE: 5361526545672192, // 批改系统-课节列表-每日一练-查看按钮点击
    DAILY_PRACTICE_SUBMIT_COUNT: 5361538239129600, // 每日一练日期列表-提交人数点击
    DAILY_PRACTICE_DETAIL: 5361535664744448, // 每日一练日期列表-查看详情点击
};

for(let name in data) {
    let temp1 = `v-clickReport="$Api.POINT.${name}"`;
    let temp2 = `this.$clickReport({ event_id: this.$Api.POINT.${name} });`;
    console.log(temp1);
    setTimeout(()=>{
        console.log(temp2);
    });
}