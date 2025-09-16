// ES6 对象实用工具

// 1. 对象克隆工具
const originalData = {
    name: '张三',
    age: 25,
    address: {
        city: '北京',
        street: '中关村大街'
    },
    hobbies: ['读书', '编程']
};

// 浅克隆
const shallowClone = { ...originalData };
const shallowClone2 = Object.assign({}, originalData);

// 深克隆
const deepClone = JSON.parse(JSON.stringify(originalData));

// 递归深克隆函数
function deepCloneRecursive(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepCloneRecursive(item, hash));
    
    if (hash.has(obj)) return hash.get(obj);
    
    const clonedObj = {};
    hash.set(obj, clonedObj);
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepCloneRecursive(obj[key], hash);
        }
    }
    
    return clonedObj;
}

const deepCloneResult = deepCloneRecursive(originalData);
console.log('深克隆结果:', deepCloneResult);

// 2. 对象验证工具
function validateObject(obj, schema) {
    const errors = [];
    
    for (const [key, rules] of Object.entries(schema)) {
        const value = obj[key];
        
        if (rules.required && (value === undefined || value === null)) {
            errors.push(`${key} 是必需的`);
            continue;
        }
        
        if (value !== undefined && value !== null) {
            if (rules.type && typeof value !== rules.type) {
                errors.push(`${key} 必须是 ${rules.type} 类型`);
            }
            
            if (rules.min !== undefined && value < rules.min) {
                errors.push(`${key} 不能小于 ${rules.min}`);
            }
            
            if (rules.max !== undefined && value > rules.max) {
                errors.push(`${key} 不能大于 ${rules.max}`);
            }
            
            if (rules.pattern && !rules.pattern.test(value)) {
                errors.push(`${key} 格式不正确`);
            }
        }
    }
    
    return errors;
}

const userSchema = {
    name: { required: true, type: 'string' },
    age: { required: true, type: 'number', min: 0, max: 150 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
};

const testUser = {
    name: '李四',
    age: 200,
    email: 'invalid-email'
};

const validationErrors = validateObject(testUser, userSchema);
console.log('验证错误:', validationErrors);

// 3. 对象转换工具
const data = {
    user_id: 1,
    user_name: '王五',
    user_email: 'wangwu@example.com',
    created_at: '2024-01-01'
};

// 下划线转驼峰
function toCamelCase(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const camelKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
        result[camelKey] = value;
    }
    return result;
}

// 驼峰转下划线
function toSnakeCase(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        result[snakeKey] = value;
    }
    return result;
}

console.log('转驼峰:', toCamelCase(data));
console.log('转下划线:', toSnakeCase(toCamelCase(data)));

// 4. 对象查询工具
const products = [
    { id: 1, name: '手机', price: 2999, category: '电子产品' },
    { id: 2, name: '电脑', price: 5999, category: '电子产品' },
    { id: 3, name: '书籍', price: 59, category: '图书' },
    { id: 4, name: '衣服', price: 199, category: '服装' }
];

// 按条件筛选
function filterBy(objArray, conditions) {
    return objArray.filter(obj => {
        return Object.entries(conditions).every(([key, value]) => {
            if (typeof value === 'function') {
                return value(obj[key]);
            }
            return obj[key] === value;
        });
    });
}

// 按字段排序
function sortBy(objArray, field, order = 'asc') {
    return [...objArray].sort((a, b) => {
        if (order === 'asc') {
            return a[field] > b[field] ? 1 : -1;
        } else {
            return a[field] < b[field] ? 1 : -1;
        }
    });
}

// 分组
function groupBy(objArray, field) {
    return objArray.reduce((groups, obj) => {
        const key = obj[field];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(obj);
        return groups;
    }, {});
}

console.log('筛选电子产品:', filterBy(products, { category: '电子产品' }));
console.log('按价格排序:', sortBy(products, 'price', 'desc'));
console.log('按类别分组:', groupBy(products, 'category'));

// 5. 对象缓存工具
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('从缓存获取结果');
            return cache.get(key);
        }
        
        console.log('计算新结果');
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const expensiveOperation = memoize((n) => {
    // 模拟复杂计算
    return n * n;
});

console.log(expensiveOperation(5)); // 计算新结果
console.log(expensiveOperation(5)); // 从缓存获取结果 