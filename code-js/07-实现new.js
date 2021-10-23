// 定义构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 手动实现new:
// constructor: 构造函数
// ...args: 构造函数参数
function myNew(constructor, ...args) {
    // 1. 创建一个新对象
    const obj = {};
    // 2. 为新对象添加属性__proto__，将该属性链接至构造函数的原型对象
    obj.__proto__ = constructor.prototype;
    // 3. 执行构造函数，this被绑定在新对象上
    const res = constructor.call(obj, ...args);
    // 4. 确保返回一个对象
    return res instanceof Object ? res : obj;
}

const usr1 = myNew(Person, 'Jack', 18);
const usr2 = new Person('Jack', 18);

console.log(usr1);
console.log(usr2);
