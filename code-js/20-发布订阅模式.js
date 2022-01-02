class Star {
    constructor() {
        // 粉丝队列
        this.followers = [];
    }
    follow(obj) {
        // 将obj加入粉丝队列
        this.followers.push(obj);
    }
    publish() {
        // 发布消息,通知粉丝
        this.followers.forEach(item => {
            item.fn(item.name);
        });
    }
}

const star = new Star();

// 三个用户关注star
star.follow({
    name: 'Jack',
    fn(name) {
        console.log(`${name}看到消息！`);
    },
});
star.follow({
    name: 'Jone',
    fn(name) {
        console.log(`${name}看到消息，并点赞！`);
    },
});
star.follow({
    name: 'Tom',
    fn(name) {
        console.log(`${name}看到消息，并评论！`);
    },
});

// star发布消息
star.publish();
// Jack看到消息！
// Jone看到消息，并点赞！
// Tom看到消息，并评论！
