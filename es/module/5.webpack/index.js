import defaultNum, { num } from "./1.js";
console.log(defaultNum, num, 'defaultNum, num');
setTimeout(() => {
    console.log(defaultNum, num, 'defaultNum, num');
}, 1000);