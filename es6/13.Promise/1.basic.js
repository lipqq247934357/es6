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

// 多少ms之后打印出来结果
console.log('1111');
timeout(1000).then((value) => {
    console.log(value);
});

timeout(1000).then((value) => {
    console.log(value);
}).then((value) => {
    console.log(value);
});


const func1 = async (task) => {
    console.log('2222');
    await Promise.resolve().then(() => {
        console.log('2.5555');
    });
    console.log('33333');
}

func1();


Promise.resolve("22").then(() => {
    console.log('111');
}).then(() => {
    console.log('val', 111);
});
