// Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义
var obj = new Proxy({ name: 'lipeng', age: 23, car: [{ name: 'passta' }, { name: 'modelY' }] }, {
    get: function (target, propKey, receiver) {
        console.log(`getting ${propKey}!`);
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log(`setting ${propKey}!`);
        return Reflect.set(target, propKey, value, receiver);
    }
});

obj.count = 1;
++obj.count;
obj.car[0].name = 'passta';
// 
var proxy = new Proxy({}, {
    get() {
        return 35;
    }
});
proxy.name = 22;
console.log(proxy.name);

// 格式: var proxy = new Proxy(target, handler);
