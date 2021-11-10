// Promise的错误具有传递特性，会一直传递到最后的catch，所以在最后写一个catch就可以了
const promise = new Promise(function (resolve, reject) {
    throw new Error('test');
});
promise
    .then(() => {

    }, function (error) {
        console.log(error + '11');
    })
    .catch(function (error) {
        console.log(error);
    });