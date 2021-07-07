import { getArrByIndex, urlController } from "../utils.js";
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

// let data = {
//     DAILY_PRACTICE: 5361526545672192, // 批改系统-课节列表-每日一练-查看按钮点击
//     DAILY_PRACTICE_SUBMIT_COUNT: 5361538239129600, // 每日一练日期列表-提交人数点击
//     DAILY_PRACTICE_DETAIL: 5361535664744448, // 每日一练日期列表-查看详情点击
// };

// for(let name in data) {
//     let temp1 = `v-clickReport="$Api.POINT.${name}"`;
//     let temp2 = `this.$clickReport({ event_id: this.$Api.POINT.${name} });`;
//     console.log(temp1);
//     setTimeout(()=>{
//         console.log(temp2);
//     });
// }
