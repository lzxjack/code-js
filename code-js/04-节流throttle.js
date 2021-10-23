// func是用户传入需要防抖的函数
// wait是等待时间，若不传参，默认50ms
// 因为闭包，falg将一直在内存中
const throttle = (func, wait = 50) => {
    // 定义falg，初试为true
    let flag = true;
    // 返回的函数是每次用户实际调用的节流函数
    return (...args) => {
        if (flag) {
            // 如果flag为true，则执行定时器
            setTimeout(() => {
                func.apply(this, args);
                // 函数执行完毕后，将flag改回true
                // 以便下次再执行
                flag = true;
            }, wait);
        }
        // 因为定时器是异步任务，定时器执行后，立刻将flag关闭
        // 在等待延时时间时，阀门始终关闭，不会一直执行函数
        flag = false;
    };
};
