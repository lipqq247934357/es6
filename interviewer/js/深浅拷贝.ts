/**
 * 浅拷贝
 * 1.assign
 * 2.扩展运算符
 */

let obj2 = {a:1,b:2};
let obj3 = {...obj2};
console.log(obj3);

let arr2 = [1,2];
let arr3 = [...arr2];
console.log(arr3);


/***
 * 深拷贝
 *
 *  思路：
 *      如果是基本类型，就直接赋值，否则
 *          对象
 *              遍历对象的属性，返回
 *          数组
 *              遍历对象的数组，返回
 */


function deepClone(data: object) {
    if (typeof data !== 'object') {
        return data;
    } else if (Array.isArray(data)) { // 是数组
        let arr = [];
        for (let item of data) {
            arr.push(deepClone(item));
        }
        return arr;
    } else { // 是对象
        let obj = {};
        Object.keys(data).forEach(item => {
            obj[item] = deepClone(data[item]);
        });
        return obj;
    }
}

let o1 = deepClone({name:'1',age:'3',arr:[1,2,3,{'haha':'haha'}]});
console.log(JSON.stringify(o1));