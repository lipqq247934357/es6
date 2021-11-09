let MyPromise = require('./Promise');

// Promise.then 接管模式

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 200);
}).then(value => {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            console.log(1111);
            resolve(new MyPromise((resolve, reject) => {
                setTimeout(() => {
                    resolve(1);
                }, 200);
            }).then(value => {
                resolve(value * 2);
            }))
        }, 100);
    });
}).then(value => {
    console.log(value);
});