let p = new Proxy({ name: 'proxyTest' }, {
    get: (target, propKey, receiver) => {
        // recevier 通常指代proxy对象
        // console.log('p === receiver', p === receiver);
        if (propKey in target) {
            return target[propKey];
        } else {
            throw new ReferenceError(`Prop name "${propKey}" does not exist.`);
        }
    },
    set: function (obj, prop, value, receiver) {
        // set 还可以用于监听数据变化，更新dom
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value;
        return true;
    },
    apply(target, ctx, args) {
        return Reflect.apply(...arguments);
    },
    has: function (target, key) {
        if (key in target) {
            return target[key]
        } else {
            return false
        }
    },
    construct(target, args, newTarget) {
        return new target(...args);
    },
    deleteProperty(target, key) {
        if(target[key]) {
            delete target[key];
            return true;
        } else {
            console.log('delete no props:', key);
        }
    }
});

// 1.get
console.log('-----get test-----');
console.log('-----p.name-----', p.name);
// console.log('-----p.age-----', p.sex); // 报错
// 2.set
console.log('-----set test-----');
// console.log('-----p.age = "a"-----', p.age = "a"); // 报错 age不是number类型
// console.log('-----p.age = 211-----', p.age = 211); // 报错 age大于200
console.log('-----p.age = 11-----', p.age = 11); // 报错 age大于200
// 3.apply
console.log('-----apply test-----');
// 4.has
console.log('-----has test-----');
console.log('-----"height" in p-----', "height" in p);
console.log('-----"name" in p-----', "name" in p);
// 5.construct
console.log('-----construct test-----');
console.log('-----目前没有demo，感觉这个有点奇怪，不着急看-----');
// 6.deleteProperty
console.log('-----deleteProperty test-----');
console.log('-----delete p.weight-----', delete p.weight);
console.log('-----delete p.name-----', delete p.name);
console.log('-----p-----', p);
// 7.defineProperty
console.log('-----defineProperty test-----');
// 8.getOwnPropertyDescriptor
console.log('-----getOwnPropertyDescriptor test-----');
