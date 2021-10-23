// 实现原生 JavaScript 中的Array.isArray()方法

Array.myIsArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

console.log(Array.myIsArray([])); // true
console.log(Array.myIsArray({})); // false
console.log(Array.myIsArray(123)); // false
console.log(Array.myIsArray('123')); // false
