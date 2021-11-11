/**
 * 回调是调用别人，然后别人在执行完成之后再调用我们的函数
 * 具体实现应该是事件机制
 * 参考链接：https://www.zhihu.com/question/19801131
 * 
 * 可以绑定多个事件
 * 
 */

Event.add('makeNoodlesSucc', noodles => {
    console.log('eat noodles');
});

Event.add('makeNoodlesSucc', noodles => {
    console.log('sell noodles');
});

function makeNoodles(water, flour) {

    setTimeout(() => {
        water = '';
        flour = '';
        let noodles = 'noodles';
        Event.fire('makeNoodlesSucc', noodles);
    }, 1000);

}

makeNoodles();