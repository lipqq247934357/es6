/**
 *
 * 事件注册触发机制
 *  主要原理：
 *      event对象作为一个容器存储所有注册事件
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
        this.events = new Map();
    }

    on(eventName, func) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Set([func]));
        }
        this.events.get(eventName).add(func);
    }

    off(eventName, func) {
        if (this.events.has(eventName)) {
            const eventListeners = this.events.get(eventName);
            if (func) {
                eventListeners.delete(func);
            } else {
                eventListeners.clear();
            }
        }
    }

    emit(eventName, ...params) {
        if (this.events.has(eventName)) {
            const eventListeners = this.events.get(eventName);
            eventListeners.forEach(cb => {
                cb(...params);
            });
        }
    }
}
