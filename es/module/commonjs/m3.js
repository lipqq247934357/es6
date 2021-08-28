// lib.js
var counter = 3;
var obj = { name: 'lipeng', age: 23 };
function incCounter() {
    counter++;
    obj.age = 28;
}
module.exports = {
    counter: counter,
    obj: obj,
    incCounter: incCounter,
    logCounter: () => {
        console.log(counter);
    }
};