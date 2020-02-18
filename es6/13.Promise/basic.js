/**
 * Promise 保存着一个未来才有的状态，并且每次调用then返回的都是一个新的Promise
 * @param ms
 * @returns {Promise<any>}
 */
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), ms, 'done');
    })
}

timeout(1000).then((value) => {
    console.log(value);
});

timeout(1000).then((value) => {
    console.log(value);
}).then((value) => {
    console.log(value);
});

