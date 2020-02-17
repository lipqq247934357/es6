var proxy = new Proxy({}, {
    get() {
        return 35;
    }
});
proxy.name = 22;
console.log(proxy.name);

let a = {
    cb: 'window.aaa'
};
let b = JSON.stringify(a);
console.log(b);