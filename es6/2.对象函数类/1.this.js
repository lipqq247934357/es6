/**
 * this取值问题：
 *	1.由new 调用？绑定到新创建的对象
 *	2.由call或者apply调用？绑定到指定的对象
 *	3.由某个对象调用，绑定到那个对象
 *	4.默认：在严格模式下绑定到undefined，否则绑定的全局window
 *	5.箭头函数：箭头函数会使用函数定义生效时外层作用域的this，如果在全局下就是window或者undefined（优先级高于call，点运算符）
 *		其他：6.1.监听器/ajax/promise/数组遍历等相关回调，绑定的是window
 *          6.2.DOM事件监听的回调：事件发生的DOM元素；
 * 
 */
let name  = 'aaa';
let a = {
    name: 'name1',
    getName(){
        console.log(this.name);
    },
    getNameArrow: () => {
        console.log(this.name);
    }
}

a.getName.call({name: 'superBoy'}); // 由call或者apply调用？绑定到指定的对象
a.getName(); // 绑定到某个对象，this是这个对象
let b = a.getName;
b(); // 默认为window对象
a.getNameArrow(); // 箭头函数，this指向定义生效时所在的this

// 箭头函数的this取决于函数定义生效时外部环境的this
function outerFunction() {
    console.log('111');
    return () => {
      console.log(this.name); // 这里的this指向outerFunction中的this
    };
  }
  
const arrowFunction = outerFunction.call({name: 'lili'});
arrowFunction(); // 这里的this仍然指向outerFunction中的this
outerFunction()(); // 在不同的函数执行结果下，this取值不同
