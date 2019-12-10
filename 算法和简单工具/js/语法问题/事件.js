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
