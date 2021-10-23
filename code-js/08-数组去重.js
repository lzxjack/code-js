// 方法1：双重for循环
const distinct = arr => {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                // splice()会改变原有数组
                len--;
                j--;
            }
        }
    }
    return arr;
};

// 方法2：利用indexOf
const distinct2 = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// 方法3：利用Set集合
const distinct3 = arr => [...new Set(arr)];
