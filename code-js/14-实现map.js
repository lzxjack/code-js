// 实现map
Array.prototype.myMap = function (callback) {
    const newArray = [];
    const len = this.length;
    for (let i = 0; i < len; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
};

// test
const arr = [1, 2, 3, 4];
const newArr1 = arr.myMap(item => item * 2);
const newArr2 = arr.myMap(item => item + 1);

console.log(newArr1); // [ 2, 4, 6, 8 ]
console.log(newArr2); // [ 2, 3, 4, 5 ]
