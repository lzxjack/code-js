// 实现bind
Function.prototype.MyBind = function (context) {
    // 调用的方法本身
    const self = this;
    // 类数组->真数组
    const args = Array.prototype.slice.call(arguments, 1);
    // 中转函数
    const temp = function () {};
    const fn = function () {
        // 将新函数执行时的参数arguments数组化，然后与绑定时的参数合并
        const newArgs = Array.prototype.slice.call(arguments);
        // 如果被new调用，this应该是fn的实例
        return self.apply(this instanceof fn ? this : context || global, args.concat(newArgs));
    };
    // 中转原型链
    temp.prototype = self.prototype;
    fn.prototype = new temp();
    return fn;
};

// 测试
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.add = function () {
    return this.x + this.y;
};

const a = Point.MyBind({}, 1);
const b = new a(2);

console.log(b.add());
