class EventEmitter {
    constructor() {
        this.callbackObj = {};
    }
    on(eventName, callback) {
        if (!this.callbackObj[eventName]) {
            this.callbackObj[eventName] = [];
        }
        this.callbackObj[eventName].push(callback);
    }

    cancel(eventName) {
        if (!this.callbackObj[eventName]) {
            console.log('要取消的事件不存在...');
        }
        delete this.callbackObj[eventName];
    }

    emit(eventName, ...args) {
        const callbackArr = this.callbackObj[eventName];
        if (callbackArr) {
            const len = callbackArr.length;
            for (let i = 0; i < len; i++) {
                callbackArr[i](...args);
            }
        } else {
            console.log('暂无此事件...');
        }
    }
}

const myEvent = new EventEmitter();
myEvent.on('steps', (...args) => console.log(...args));
myEvent.on('steps2', (...args) => console.log(...args));

myEvent.cancel('steps');

myEvent.emit('steps', 0, 1, 2, 2);
myEvent.emit('steps', 30, 4);
myEvent.emit('steps', 100, 6, 5);

myEvent.emit('steps2', 100, 6, 5);
