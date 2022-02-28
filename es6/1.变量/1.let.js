/**
 * 1.let 用于声明变量
 *   let声明的变量只在块作用域内有效
 *   let声明的变量必须先定义后使用，有暂时性死区（暂时性死区的本质是在进入该变量作用域的时候该变量已经存在，但是不能够获取，直到变量声明的那一刻起，才可以获取和使用变量）
 *   let 不允许重复声明
 * */

var v = 10;
let a = 20;
// 变量提升
for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log('i', i);
    });
}

for (let i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log('i', i);
    });
}