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

/**
 * 时间段格式化
 * @param {Number} duration 单位s
 */
export const formatDuration = function (duration) {
    let hours = parseInt((duration % (24 * 60 * 60)) / 3600) + '';
    let minutes = parseInt(((duration % (24 * 60 * 60)) % 3600) / 60) + '';
    let seconds = parseInt(((duration % (24 * 60 * 60)) % 3600) % 60) + '';
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')} `;
};

/**
 *
 * 将秒转化成以分钟为单位的时长
 * @param {*} duration 单位是秒
 * @returns
 */
export const formatDuration4Min = function (duration) {
    let seconds = duration % 60 + '';
    let minutes = parseInt(duration / 60) + '';
    return `${minutes.padStart(2, '0')}: ${seconds.padStart(2, '0')} `;
};

// basic

export const strToArr = (str, splitSymbol) => {
    return str.split(splitSymbol);
}

/**
 * 
 * @param {array} arr 
 * @param {array[number,number]} param1 
 * @returns 
 */

export const turnArrayValue = (arr, [index1, index2]) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

/**
 * 
 * 移动小数点位置
 * 
 * @param {string} str 
 * @param {number} number 
 * @returns 
 */

export const updatePointPosition = (str, number) => {
    let arr = str.split("");
    // 如果是整数，默认是没有'.'的，增加'.'
    if (arr.indexOf(".") === -1) {
        arr.push(".");
    }

    while (number > 0) {
        // 没有0补0
        if (arr.indexOf(".") === 0) {
            arr.unshift("0");
        }
        let index = arr.indexOf(".");
        arr = turnArrayValue(arr, [index, index - 1]);
        number--;
    }
    // 如果最后'.'之前没有0，增加0
    if (arr.indexOf(".") === 0) {
        arr.unshift("0");
    }
    return arr.join("");
};


/**
 * 
 * @param {[]} data 
 * @returns { [] }
 */

export const treeUtil = function (data) {

    const tree = []; // 树
    const pos = {}; // 一维数组

    // 将数组转化为对象 便于查找
    for (let i = 0; i < data.length; i++) {
        pos[data[i].menuId] = data[i];
    }
    // 遍历数组建立树
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.menuLevel === '1') { //一级菜单
            tree.push(item);// 树的一级菜单
        } else { // 子节点
            let parentId = item['parentMenuId'].trim();
            let parentMenu = pos[parentId]; // 获取父节点
            pushItem(parentMenu.children || (parentMenu.children = []), item); // 给父亲增加自己
        }
    }

    // 算法:插入到一个已经排序的数组里 这里可以使用二分查找，比遍历性能高一点
    function pushItem(children, item) { // 根据menuOrder进行排序
        if (children) {
            for (let i = 0; i < children.length; i++) {
                if (item.menuOrder < children[i].menuOrder) {
                    break;
                }
            }
            children.splice(i, 0, item);
        }
    }
    return tree;
};