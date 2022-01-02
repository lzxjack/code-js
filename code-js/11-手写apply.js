function person(a, b, c) {
    console.log(this.name);
    return a + b + c;
}

const usr = {
    name: 'jack',
};

// 实现apply
Function.prototype.myApply = function (obj, arr) {
    // 判断上下文
    const newObj = obj ? Object(obj) : global;
    // 将函数设置为对象的属性
    newObj.fn = this;
    // 执行这个函数，并拿到返回值
    let res;
    if (arr) {
        res = newObj.fn(...arr);
    } else {
        res = newObj.fn();
    }
    // 删除这个函数属性
    delete newObj.fn;
    // 返回值
    return res;
};

console.log(person.myApply(usr, [1, 2, 3]));
// jack
// 6

console.log(person.myApply(usr));
// jack
// NaN
