/**
 *
 * proxy被代理的target的this指向代理对象
 *
 * @type {{m: target.m}}
 */
const target = {
    m: function () {
        console.log(this === proxy);
    }
};

handler = {};

const proxy = new Proxy(target, handler);

proxy.m(); // true
target.m(); // false