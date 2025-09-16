// ES6 对象高级特性

// 1. 原型链和继承
const animal = {
    type: '动物',
    makeSound() {
        console.log('发出声音');
    }
};

const dog = Object.create(animal);
dog.breed = '金毛';
dog.bark = function() {
    console.log('汪汪汪!');
};

console.log('dog的原型:', Object.getPrototypeOf(dog));
console.log('dog的类型:', dog.type);
dog.makeSound();
dog.bark();

// 2. 对象合并的深度问题
const deepObj1 = {
    a: 1,
    b: { c: 2, d: 3 },
    e: [4, 5, 6]
};

const deepObj2 = {
    b: { d: 7, f: 8 },
    g: 9
};

// 浅合并 - 会覆盖整个嵌套对象
const shallowMerge = Object.assign({}, deepObj1, deepObj2);
console.log('浅合并结果:', shallowMerge);

// 深合并函数
function deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && source[key] !== null && 
                typeof target[key] === 'object' && target[key] !== null) {
                result[key] = deepMerge(target[key], source[key]);
            } else {
                result[key] = source[key];
            }
        }
    }
    
    return result;
}

const deepMergeResult = deepMerge(deepObj1, deepObj2);
console.log('深合并结果:', deepMergeResult);

// 3. 对象代理 (Proxy)
const originalUser = {
    name: '赵六',
    age: 25
};

const userProxy = new Proxy(originalUser, {
    get(target, property) {
        console.log(`访问属性: ${property}`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`设置属性: ${property} = ${value}`);
        if (property === 'age' && (value < 0 || value > 150)) {
            throw new Error('年龄必须在0-150之间');
        }
        target[property] = value;
        return true;
    },
    has(target, property) {
        console.log(`检查属性: ${property}`);
        return property in target;
    }
});

console.log('通过代理访问:', userProxy.name);
userProxy.age = 30;
console.log('设置年龄后:', userProxy.age);

// 4. 对象符号属性 (Symbol)
const sym1 = Symbol('description1');
const sym2 = Symbol('description2');

const symbolObj = {
    [sym1]: '符号属性1',
    [sym2]: '符号属性2',
    normalProp: '普通属性'
};

console.log('符号属性:', symbolObj[sym1]);
console.log('所有符号属性:', Object.getOwnPropertySymbols(symbolObj));

// 5. 对象不可变性
const mutableObj = { x: 1, y: 2 };

// 密封对象 - 不能添加/删除属性，但可以修改现有属性
Object.seal(mutableObj);
// mutableObj.z = 3; // 这行会报错
mutableObj.x = 10; // 这行可以执行
console.log('密封后:', mutableObj);

// 6. 对象比较
const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };
const objC = objA;

console.log('objA === objB:', objA === objB); // false
console.log('objA === objC:', objA === objC); // true

// 深度比较函数
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (const key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
}

console.log('深度比较 objA 和 objB:', deepEqual(objA, objB)); 