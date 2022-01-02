// 生成[Min,Max]区间范围内的随机整数
// 参数：区间左边界、右边界
const getRandomNum = (Min, Max) => {
    const Range = Max - Min + 1;
    const Rand = Math.random();
    return Min + Math.floor(Rand * Range);
};

// 测试
const map = new Map();
for (let i = 0; i < 1000; i++) {
    const num = getRandomNum(2, 5);
    map.set(num, (map.get(num) || 0) + 1);
}

console.log(map);
