function getType(obj) {
    return typeof obj === 'object'
        ? Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '').toLowerCase()
        : typeof obj;
}

// 测试
console.log(getType(123)); // number
console.log(getType('string')); // string
console.log(getType(true)); // boolean
console.log(getType(undefined)); // undefined
console.log(getType(null)); // null
console.log(getType({})); // object
console.log(getType([])); // array
console.log(getType(/123/)); // regexp
console.log(getType(new Date())); // date
