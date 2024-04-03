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

// 需求：计算所有项目的时间总和
console.log('全部时间', arr.reduce((prev, curr) => prev + curr.hour , 0))
// 按照游玩时间进行排序
console.log('按游玩时间排序升序', ([...arr]).sort((a, b) => a.hour - b.hour))


