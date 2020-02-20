/**
 * 箭头函数最大的特点就是this和词法作用域的动态this是一样的，这个特性非常好，可以让我们在需要使用this的地方直接使用它。
 * 箭头函数没有this，只能使用作用域中的this，因为没有this，不能作为构造函数，不能new，没有arguments属性，不能作为generator函数
 */

let a = 'aaa';

let f1 = () => {
    console.log(this.b);
};

f1(111);

let obj = {
    name: 'lipeng'
};

function f2() {
    setTimeout(() => {
        console.log(this.name)
    }, 100)
}

f2.call(obj);
