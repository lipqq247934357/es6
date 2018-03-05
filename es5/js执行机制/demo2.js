setImmediate(function () {
    console.log(3);
})
setTimeout(function () {
    console.log(2);
}, 0)
process.nextTick(function () {
    console.log(1);
});
