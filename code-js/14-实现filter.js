// 实现filter
Array.prototype.myFilter = function (callback) {
    const newArray = [];
    const len = this.length;
    for (let i = 0; i < len; i++) {
        callback(this[i]) && newArray.push(this[i]);
    }
    return newArray;
};

// test
const arr = [1, 2, 3, 4];
const newArr1 = arr.myFilter(item => item > 1);

console.log(newArr1); // [ 2, 3, 4 ]
