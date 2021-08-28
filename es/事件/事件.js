/**
 *
 * 事件注册触发机制
 *  主要原理：
 *      event对象作为一个数据结构存储所有注册事件
 *      结构：event:{
 *              funcName:[func1,func2]
 *                  ...
 *          }
 *
 *       on：
 *          给event对象添加方法，方法名为key
 *       emit:
 *          到event对象中找对应的方法，然后执行
 *       off:
 *          将event对象指定key的数组置空
 */


class EventEmitter {
    constructor() {
        this.event = {};
    }

    on(eventName, func) {
        (this.event[eventName] || (this.event[eventName] = [])).push(func);
    }

    emit(eventName, ...params) {
        if (eventName && this.event[eventName]) {
            this.event[eventName].forEach(cb => {
                cb(...params);
            })
        }
    }

    off(eventName = '') {
        if (eventName && this.event[eventName]) {
            this.event[eventName] = [];
        }
    }
}