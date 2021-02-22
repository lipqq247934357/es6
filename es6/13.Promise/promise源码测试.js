// let pro = require('./Promise');
// let pro = require('./rc/Promise_class');
const Promise = require('./rc/Promise_class2');
let pro = require('./rc/Promise_class2');

let a = new pro((resolve, reject) => {
    setTimeout(() => resolve(2), 1400, 'done');
});

a.then((value) => {
    console.log(value);
});

a.then((value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 1400, 'xxxx');
    });
}).then(value => {
    console.log(value);
});


