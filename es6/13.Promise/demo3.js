let a = new Promise((resolve, reject) => {
    setTimeout(() => resolve(b), 400, 'done');
});

let b = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 400, 'done');
});


a.then((value) => {
    console.log(value);
});

