// 本质上promise只是解决了callback回调的回调地狱问题，不是新的特性
new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), ms, 'done');
}).then(value => {
    console.log(value);
});