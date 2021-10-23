// func是用户传入需要防抖的函数
// wait是等待时间，若不传参，默认50ms
// 因为闭包，timer将一直在内存中
const debounce = (func, wait = 50) => {
    // 缓存一个定时器
    let timer = null;
    // 返回的函数是每次用户实际调用的防抖函数
    return (...args) => {
        // 如果已经设定过定时器了就清空上一次的定时器
        if (timer) clearTimeout(timer);
        // 开始一个新的定时器，延迟执行用户传入的方法
        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
};
