/***
 * 深度遍历
 *
 *  思路：
 *      如果是基本类型，就直接赋值，否则
 *          对象
 *              遍历对象的属性，返回
 *          数组
 *              遍历对象的数组，返回
 */
function deepClone(data) {
    if (typeof data !== 'object') {
        return data;
    }
    else if (Array.isArray(data)) { // 是数组
        var arr = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            arr.push(deepClone(item));
        }
        return arr;
    }
    else { // 是对象
        var obj_1 = {};
        Object.keys(data).forEach(function (item) {
            obj_1[item] = deepClone(data[item]);
        });
        return obj_1;
    }
}
var o1 = deepClone({ name: '1', age: '3', arr: [1, 2, 3, { 'haha': 'haha' }] });
console.log(JSON.stringify(o1));
