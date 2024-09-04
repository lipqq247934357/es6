import { openDefaultBrowser } from './nodeOperate.js';
let data = {classTypeId: 132508, lessonId: 1127647202};
let params = Object.entries(data).reduce((arr, [k, v]) => {
    return arr.push(`${k}=${v}`) && arr;
}, []).join('&');

let str = `https://diy.aixuexi.com/jy-editor/previewpure.html?standalone=1&${JSON.stringify(params).replace(/"/g, "")}`;

// 打开浏览器
openDefaultBrowser(str);
