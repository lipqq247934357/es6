/**
 * 将传入对象的每一项转换成数组，并且给每一项数组添加后面的val
 *
 * @param obj
 * @param val
 * @returns {*}
 */

function parseObjValToArray(obj, val) {
    Object.keys(obj).forEach(item => {
        obj[item] = [];
        if (val) {
            obj[item].push(val);
        }
    })
    return obj;
}


let a = {
    "outputTemNo": '',
    "fileName": '',
    "fileDesc": '',
    "fileWordCode": '',
    "colSplitSymbol": '',
    "sqlSentence": '',
    "inputUser": ''
};
let val = parseObjValToArray(a, {required: true, message: '请输入'});
console.log(val);
