// array.map(function(currentValue,index,arr), thisValue)

Array.prototype.myMap = function (fn, thisValue) {
    const res = [];
    this.reduce((pre, cur, index, array) => {
        res[index] = fn.call(thisValue, array[index], index, array);
    }, 0);
    return res;
};

const nums = [1, 2, 3, 4, 5, 6];

const nums2 = nums.myMap(x => 2 * x);
console.log(nums2);
