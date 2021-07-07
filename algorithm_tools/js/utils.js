/**
 *  将元素分为m组,获取每组中第n个元素（n从0开始）
 */

 export const getArrByIndex = function(arr, m, n) {
    return arr.filter((item,index)=> index % m === n);
}

/**
 * 将url的参数解析成key,val的形式
 * @param url
 * @returns {{}}
 */

export const urlController = function(url) {
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
function ArrayToObject(arr1,arr2) {
    
}

