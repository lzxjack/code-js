const arr = [1, 2, [3, [4, [5, 6], 7], 8], 9, [10]];

// 1. reduce
const flatten1 = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur);
    }, []);
};

// 2. flat
// 参数为要提取数组的结构深度，默认为1
// 设置为Infinity，则将所有的嵌套数组都扁平化
const flatten2 = arr => arr.flat(Infinity);

// 3. while循环
const flatten3 = arr => {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
};

const res = flatten1(arr);
console.log(res);
