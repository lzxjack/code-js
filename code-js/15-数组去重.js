// 基本数组
// 1. 双重for
const unique1 = arr => {
    // 错误处理
    if (!Array.isArray(arr)) throw new Error('params is not Array!');
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                len--;
                j--;
            }
        }
    }
    return arr;
};

// 2. 利用indexOf
const unique2 = arr => {
    if (!Array.isArray(arr)) throw new Error('params is not Array!');
    const newArr = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (newArr.indexOf(arr[i]) < 0) newArr.push(arr[i]);
    }
    return newArr;
};

const unique3 = arr => {
    if (!Array.isArray(arr)) throw new Error('params is not Array!');
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

// 3. 利用Set
const unique4 = arr => {
    if (!Array.isArray(arr)) throw new Error('params is not Array!');
    return [...new Set(arr)];
};

const unique5 = arr => {
    if (!Array.isArray(arr)) throw new Error('params is not Array!');
    return Array.from(new Set(arr));
};

// 对象数组
const unique6 = (arr, key) => {
    if (!Array.isArray(arr)) throw new Error('params is not Array!');
    const map = new Map();
    arr.forEach(obj => {
        if (!map.has(obj[key])) map.set(obj[key], obj);
    });
    return [...map.values()];
};
