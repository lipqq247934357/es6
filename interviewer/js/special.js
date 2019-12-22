// 请用您熟悉的编程语言，编程实现一个比较任意两个软件版本号大小的函数，如 1.2.3a 和 1.2.4b 比较，后者版本号更大，请考虑各种情况，不可以使用系统提供的比较函数。

let ver1 = '';
let ver2 = '';

function compare(ver1, ver2) {

    function valid(ver) {
        if (typeof ver === 'object') {
            if (ver.valueOf) {
                ver = ver.valueOf();
            } else {
                if (ver.toString) {
                    ver = ver.toString();
                } else {
                    ver = '0';
                }
            }
        }

        if (typeof ver === 'undefined' || typeof ver === 'null') {
            ver = '0';
        } else if (typeof ver === 'boolean') {
            ver = String(Number(ver));
        }
        return ver;
    }

    ver1 = valid(ver1);

    ver2 = valid(ver2);


    let verL1 = ver1.split('.');
    let verL2 = ver1.split('.');

    let minLen = verL1.length < verL2.length ? verL1.length : verL2.length;

    let reg = /([\d]*)([\D]*)/;
    for (let i = 0; i < minLen.length; i++) {
        let arr1 = verL1[i].match(reg);
        let arr2 = verL2[i].match(reg);
        if (Number(arr1[1]) > Number(arr2[1])) {
            return 1;
        } else if (Number(arr1[1]) < Number(arr2[1])) {
            return -1;
        } else {
            if (arr1[2] > arr2[2]) {
                return 1;
            } else if (arr1[2] < arr2[2]) {
                return -1;
            } else {
                continue;
            }
        }
    }

    if (verL1.length === verL2.length) {
        return 0;
    } else if (verL1.length < verL2.length) {
        return -1;
    } else {
        return 1;
    }
}