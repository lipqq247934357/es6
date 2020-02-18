/**
 * Promise.all
 * Promise.race
 * Promise.resolve
 * Promise.reject
 */

let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(100);
    }, 1000)
});

let p2 = new Promise((resolve, reject) => {
    resolve(200);
});

async function run() {
    let data = await Promise.all([p1, p2]);
    console.log(data);
}

run();


async function run2() {
    let data = await Promise.race([p1, p2]);
    console.log(data);
}

run2();

let data = Promise.resolve(200);
console.log(data);