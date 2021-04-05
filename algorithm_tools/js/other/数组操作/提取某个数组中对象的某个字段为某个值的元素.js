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

let a = getProp(data, 'code', '2', ['code', 'codeName']);
console.log(a);

// 数组项是对象的时候给数组去重
function mergeData(list) {
    const obj = {};
    list = list.reduce((prev, item) => {
        const { id } = item;
        obj[id] ? "" : (obj[id] = true && prev.push(item));
        return prev;
    }, [])
    return list;
}

const list = [{ id: 1, name: 1 }, { id: 2, name: 2 }, { id: 3, name: 3 }, { id: 1, name: 1 }];

console.log(mergeData(list));