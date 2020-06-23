let _ = require('lodash');
let data = [
    {
        "code": "1",
        "codeName": "百度"
    },
    {
        "code": "2",
        "codeName": "360"
    },
    {
        "code": "3",
        "codeName": "消金"
    }
];

/**
 * 提取数组中某个对象的属性为某个值的对象
 * @param data 数据
 * @param prop 属性
 * @param val 值
 * @returns Object || undefined
 */

function getObj(data, prop, val) {
    let len = data.length;
    for (let i = 0; i < len; i++) {
        if (data[i][prop] === val) {
            return data[i];
        }
    }
}

/**
 *
 * 提取数组中某个对象的属性为某个值的对象的几个属性
 * @param data 数据
 * @param prop 属性
 * @param val 值
 * @param needVal
 */

function getProp(data, prop, val, needVal) {

    let obj = getObj(data, prop, val);
    if (obj) {
        if (Array.isArray(needVal)) {
            return _.values(_.pick(obj, needVal));
        } else {
            return obj[needVal];
        }
    }
}

let a = getProp(data, 'code', '2',['code','codeName']);
console.log(a);

// 资产交易平台有使用
