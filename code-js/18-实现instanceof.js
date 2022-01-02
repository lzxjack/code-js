function Person() {}
function Person2() {}

const usr = new Person();

function myInstanceof(obj, constructor) {
    // obj的隐式原型
    let implicitPrototype = obj?.__proto__;
    // 构造函数的原型
    const displayPrototype = constructor.prototype;
    // 遍历原型链
    while (implicitPrototype) {
        // 找到，返回true
        if (implicitPrototype === displayPrototype) return true;
        implicitPrototype = implicitPrototype.__proto__;
    }
    // 遍历结束还没找到，返回false
    return false;
}

console.log(myInstanceof(usr, Person)); // true
console.log(myInstanceof(usr, Object)); // true

console.log(myInstanceof(usr, Person2)); // false
console.log(myInstanceof(usr, Function)); // false

console.log(myInstanceof(null, Object)); // false
console.log(myInstanceof(undefined, Object)); // false
