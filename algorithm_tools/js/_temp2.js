/**
 *
 *
 * desc:
 *  生成一个对象，属性是这些字段
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

let obj = {};

function run(i) {
    prop.forEach(item => {
        if (item)
            obj[item] = i;
    });
    console.log(JSON.stringify(obj)+',');
}

// 有多少条数据
let num = 20;

for (let i = 0; i < num; i++) {
    run(i);
}
