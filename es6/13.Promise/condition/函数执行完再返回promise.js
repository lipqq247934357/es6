function a() {
    console.log('111');
    setTimeout(() => {
        return Promise.resolve(1);
    }, 100)
}

a().then(() => {
    console.log('222');
});

// 函数执行完之后再返回promise是没有价值的，因为函数已经被执行完了，本质上promise只是把then和catch放到了回调栈中