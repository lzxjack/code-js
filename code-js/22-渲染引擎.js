let template = '我叫{{name}}，我是{{name}}，今年{{age}}岁了，今年{{age}}岁，性别{{sex}}。';

const data = {
    name: 'Jack',
    age: 18,
    address: 'BeiJing',
};

const myRender = (template, data) => {
    let res = template;
    const reg = /{{(.*?)}}/g;
    const arr = [...new Set(res.match(reg))];
    const map = new Map();
    arr.forEach(key => {
        const value = key.split('{{')[1].split('}}')[0];
        if (!map.has(key)) map.set(key, value);
    });
    arr.forEach(key => {
        res = res.replace(new RegExp(`${key}`, 'g'), data[map.get(key)]);
    });
    return res;
};

console.log(myRender(template, data));
