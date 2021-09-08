let obj = {
    './src/index.js': (exports) => {
        Object.defineProperty(exports, 'name', {
            get() {
                return name;
            }
        })
        let name = 100;
        setTimeout(() => {
            name = 200;
        }, 500)
    }
}
let result = {};
obj['./src/index.js'](result);
console.log(result.name);
setTimeout(() => {
    console.log(result.name);
}, 1000);