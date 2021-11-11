/**
 * 回调是调用别人，然后别人在执行完成之后再调用我们的函数
 * 具体实现应该是事件机制
 * 参考链接：https://www.zhihu.com/question/19801131
 * 参考链接：https://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html
 * 
 * 缺点：
 *  代码耦合度高，不易阅读
 *  只能绑定一个回调
 * 
 */

function sell(noodles) {
    console.log('sell noodles');
}

function eat(noodles) {
    console.log('eat noodles');
}


function makeNoodles(water, flour, callback) {

    setTimeout(() => {
        water = '';
        flour = '';
        let noodles = 'noodles';
        callback(noodles);
    }, 1000);

}

makeNoodles('water', 'flour', sell);