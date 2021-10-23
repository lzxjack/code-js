// 实现一个sleep()延迟函数，例如，sleep(2000)表示等待2000毫秒，再执行函数里面的操作。

const sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time));
};
