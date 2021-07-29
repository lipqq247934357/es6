/**
 *  将元素分为m组,获取每组中第n个元素（n从0开始）
 */

export const getArrByIndex = function (arr, m, n) {
    return arr.filter((item, index) => index % m === n);
}

/**
 * 将url的参数解析成key,val的形式
 * @param url
 * @returns {{}}
 */

export const urlController = function (url) {
    let _url = url.split("?")[1];
    if (!_url) {
        return {};
    }
    let windowHref = _url.split("&");
    let obj = {};
    for (let i = 0; i < windowHref.length; i++) {
        let arr = windowHref[i].split("=");
        obj[arr[0]] = arr[1]
    }
    return obj;
}

/**
 * TODO: 将arr转化成对象
 */
function ArrayToObject(arr1, arr2) {

}

function toTwoLen(time) {
    if (!time) return "00";
    if (time < 10) return `0${time}`;
    return time;
}
/**
 * 时间段格式化
 * @param {Number} duration 单位s
 */
const formatDuration = function (duration) {
    let hours = parseInt((duration % (24 * 60 * 60)) / 3600);
    let minutes = parseInt(((duration % (24 * 60 * 60)) % 3600) / 60);
    let seconds = parseInt(((duration % (24 * 60 * 60)) % 3600) % 60);
    return `${toTwoLen(hours)}:${toTwoLen(minutes)}:${toTwoLen(seconds)} `;
};

export default formatDuration;

/**
 *
 * 将秒转化成以分钟为单位的时长
 * @param {*} duration 单位是秒
 * @returns
 */
export const formatDuration4Min = function (duration) {
    let seconds = duration % 60;
    let minutes = parseInt(duration / 60);
    return `${toTwoLen(minutes)}: ${toTwoLen(seconds)} `;
};
