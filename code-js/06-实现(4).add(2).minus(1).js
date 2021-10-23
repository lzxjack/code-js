Number.prototype.add = function (n) {
    // this为 Number {4} 实例对象
    // this.valueOf()为Number {4}的基本数字值4
    return this.valueOf() + n;
};
Number.prototype.minus = function (n) {
    return this.valueOf() - n;
};

// 同样，也可以添加乘、除的方法
Number.prototype.mul = function (n) {
    return this.valueOf() * n;
};

Number.prototype.div = function (n) {
    return this.valueOf() / n;
};

// 测试
// (4+2-1)×6÷10=3
console.log((4).add(2).minus(1).mul(6).div(10)); // 3

// (2×9+6)÷4-5=1
console.log((2).mul(9).add(6).div(4).minus(5)); // 1
