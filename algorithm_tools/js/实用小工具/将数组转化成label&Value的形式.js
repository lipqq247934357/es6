/**
 * 
 * 将数组转化成
 * 
 */

let arr = [
  "无需提醒",
  "到时提醒",
  "结束前15分钟",
  "结束前30分钟",
  "结束前45分钟",
  "结束前1小时",
  "结束后每30分钟循环",
  "结束后每1小时循环",
];

let temp = [];
arr.forEach((item, index) => {
  temp.push({
    label: item,
    id: index,
  });
});
console.log("JSON.stringify(temp)", JSON.stringify(temp));