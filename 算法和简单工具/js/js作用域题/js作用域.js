/**
 *
 *    this的取值取决于调用这个方法的对象，是一个执行期间才会生成的东西
 *    绑定规则：
 *  1.由new 调用？绑定到新创建的对象
 *  2.由call或者apply调用？绑定到指定的对象
 *  3.由某个对象调用，绑定到那个对象
 *  4.默认：在严格模式下绑定到undefined，否则绑定的全局window
 *  5.箭头函数：箭头函数会继承外层函数的调用的this绑定如果在全局下就是window或者undefined
 *
 *
 *  这种题的复杂性主要体现在：
 *      this+函数作用域+箭头函数+异步
 */

window.a = 200;

function func() {
    let a = 300;
    let obj = {
        a: 11,
        b: function () {
            (function () {
                console.log(this.a, 'b--> 闭包函数');
            })(); // 第5个规则
            console.log(this.a, 'b --> this.a');
            console.log(a, 'b --> a')
        },
        c: function () {
            setTimeout(() => {
                console.log(this.a, 'c --> this.a');
                console.log(a, 'c --> a')
            })
        },
        d: function () {
            obj.c.call({a: 500});
        }
    };
    return [obj.b, obj.c, obj.d];
}

let res = func();

let b = res[0];
let c = res[1];
let d = res[2];

b();
c();
d();

res[0]();
res[1]();
res[2]();