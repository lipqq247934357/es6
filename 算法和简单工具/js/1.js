// let arr = [1, 2, 3, 4];
//
// arr.forEach((item) => {
//     setTimeout(() => {
//         console.log(item);
//     }, 5000 - item*1000)
// })

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
