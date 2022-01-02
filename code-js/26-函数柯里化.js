// const threeSum = a => b => c => a + b + c;

// console.log(threeSum(1)(2)(3));

function currying(fn, ...args) {
    return function (...args2) {
        return fn.apply(null, [...args, ...args2]);
    };
}

const add = (a, b, c, d) => a + b + c + d;
const a = currying(add, 1);
const b = currying(a, 2);
const c = currying(b, 3);
const res = currying(c, 4)();

console.log(res);

console.log(currying(add, 1, 2, 3, 4)());
