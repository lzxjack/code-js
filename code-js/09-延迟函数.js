const sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time));
};

console.log(1);

sleep(2000).then(() => {
    console.log(2);
});

console.log(3);
