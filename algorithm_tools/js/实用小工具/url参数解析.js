/**
 * 方案一：将url的参数解析成key,val的形式
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

let arr = [];

arr = [
    'http://localhost:8000/#/course/studentRecord?courseId=1&classId=25237&axgStudentId=2001174&institutionId=1004851&students=%5B%7B%22axgStudentId%22%3A2001174,%22classId%22%3A25237,%22institutionId%22%3A1004851%7D,%7B%22axgStudentId%22%3A4406197,%22classId%22%3A25236,%22institutionId%22%3A1004691%7D,%7B%22axgStudentId%22%3A4406384,%22classId%22%3A25236,%22institutionId%22%3A1004691%7D,%7B%22axgStudentId%22%3A4406623,%22classId%22%3A25237,%22institutionId%22%3A1004851%7D%5D'
]

for (let item of arr) {
    let a = urlController(item);
    console.log(a);
}

// 方案二：可以使用 URLSearchParams 代替，性能可能更好

const getParamsByKey = (key) => {
    const search = window.location.href.split('?')[1];
    const query = new URLSearchParams(search);
    return query.get(key);
}

// 方案三：直接在项目搜索有没有类似代码
