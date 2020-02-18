let pro = require('./Promise');

let a = new pro((resolve, reject) => {
    setTimeout(() => resolve(2), 400, 'done');
});

a.then((value) => {
    console.log(value);
});

a.then((value) => {
    console.log(value*2);
});


