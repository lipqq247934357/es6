/**
 * 首先generator相当于每次异步执行完之后再次回来执行，下个操作相当于是一个回调函数
 * 然后如果next.done为false，必须再次轮回，直到next.done为true
 */

function* generator() {
    let a = yield 5;
    let b = yield 6;
    return a + b;
}

function Thunk(g) {

    let i = g();

    while(i.next().value ){

    }

}
