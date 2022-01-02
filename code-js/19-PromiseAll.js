const PromiseAll = promises => {
    return new Promise((resolve, reject) => {
        const result = [];
        promises.forEach(promise => {
            promise.then(
                res => {
                    result.push(res);
                    result.length === promises.length && resolve(result);
                },
                err => {
                    reject(err);
                }
            );
        });
    });
};

const promiseArray = [1, 2, 3, 4].map(item => new Promise(resolve => resolve(item)));
console.log(promiseArray);

PromiseAll(promiseArray).then(res => console.log(res));
