var obj = new Proxy({}, {
    get(target, key, receiver) {
        console.log(`get ${key} ${receiver}!`);
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log(`set ${key} ${value} ${receiver}!`);
        return Reflect.set(target, key, value, receiver)
    }
});

obj.count = 1;
++obj.count;
