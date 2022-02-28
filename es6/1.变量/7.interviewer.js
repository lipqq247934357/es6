// 只在块级作用域内有效
for (let i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log('i', i);
    });
}
// 变量作用域提升，访问的全是全局的i
for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log('i', i);
    });
}