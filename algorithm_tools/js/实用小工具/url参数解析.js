/**
 * 将url的参数解析成key,val的形式
 * @param url
 * @returns {{}}
 */

function urlController(url) {
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

// 将url放入其中

let arr = [
    '?disabled=2&id=1f9e532b06714ca98870d1f74fa197a0&bussNo=CON_HZ01_0000_201904_0058&custId=169c1c96b860425b87b24600846b3b5f&arrangement=22&nowpath=%2Flayout%2Fupper&nowurlName=上会审议&custName=&roleOperation=10'
];

for (let item of arr) {
    let a = urlController(item);
    console.log(a);
}
