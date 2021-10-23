const deepCopy = oldObj => {
    // 递归出口：若属性为值或者null，则直接返回
    if (typeof oldObj !== 'object' || oldObj === null) {
        return oldObj;
    }

    // 结果对象
    let newObj = {};
    // 如果是数组，则定义结果数组
    if (oldObj.constructor === Array) {
        newObj = [];
    }

    // 遍历对象的key
    for (const key in oldObj) {
        // key是对象的自有属性，递归调用深拷贝方法
        if (oldObj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(oldObj[key]);
        }
    }
    return newObj;
};
