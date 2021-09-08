export let num = 3;
let defaultNum = 3;
setTimeout(() => {
    num = 4;
    defaultNum = 4;
}, 500);
export default defaultNum;