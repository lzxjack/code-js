// 正则表达式：/(?=[A-Z])/
// 匹配被大写字母跟着的空字符

const changeName = str => {
    return str
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
};

console.log(changeName('fontName')); // font-name
console.log(changeName('getAllData')); // get-all-data
