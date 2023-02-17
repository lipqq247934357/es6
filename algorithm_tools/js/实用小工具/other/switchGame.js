const arr = [{
    name: '无双 风花雪月',
    hour: 50,
    desc: '50+'
}, {
    name: '狂野赛车9',
    hour: 2
}, {
    name: 'INSIDE',
    hour: 10
}, {
    name: '伪装游戏',
    hour: 1
}, {
    name: '超级马里奥 奥德赛',
    hour: 10
}, {
    name: '星之卡比',
    hour: 5
}, {
    name: 'LIMBO',
    hour: 5
}, {
    name: '灵魂旅人',
    hour: 55
}, {
    name: '暗黑破坏神3',
    hour: 75
}, {
    name: '集合啦！动物森友会',
    hour: 2
}, {
    name: '塞尔达传说 旷野之息',
    hour: 20
}, {
    name: '勇者斗恶龙11s',
    hour: 35
}]

const totalTime = arr.reduce((prev, item) => item.hour + prev, 0);
console.log('全部时间', totalTime)
console.log('按游玩时间排序', ([...arr]).sort((item1, item2) => item1.hour - item2.hour))


